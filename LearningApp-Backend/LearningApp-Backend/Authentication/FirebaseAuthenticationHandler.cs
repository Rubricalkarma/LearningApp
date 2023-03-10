using FirebaseAdmin;
using FirebaseAdmin.Auth;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.Extensions.Options;
using System.Security.Claims;
using System.Text.Encodings.Web;

namespace LearningApp_Backend.Authentication
{
    public class FirebaseAuthenticationHandler : AuthenticationHandler<AuthenticationSchemeOptions>
    {

        private readonly FirebaseApp _firebaseApp;

        public FirebaseAuthenticationHandler(IOptionsMonitor<AuthenticationSchemeOptions> options, ILoggerFactory logger, UrlEncoder encoder, ISystemClock clock, FirebaseApp firebaseApp) : base(options, logger, encoder, clock)
        {
            _firebaseApp = firebaseApp;
        }

        protected override async Task<AuthenticateResult> HandleAuthenticateAsync()
        {
            const string BEARER = "Bearer ";
            const string AUTHORIZATION = "Authorization";

            if (!Context.Request.Headers.ContainsKey(AUTHORIZATION))
                return AuthenticateResult.NoResult();

            Context.Request.Headers.TryGetValue(AUTHORIZATION, out var bearerToken);

            if (!bearerToken.Any() || !bearerToken.First().StartsWith(BEARER))
                return AuthenticateResult.Fail("Invalid Scheme");

            var token = bearerToken.First().Substring(BEARER.Length);

            var firebaseToken = await FirebaseAuth.GetAuth(_firebaseApp).VerifyIdTokenAsync(token);

            return AuthenticateResult.Success(new AuthenticationTicket(new ClaimsPrincipal(new List<ClaimsIdentity>()
            {
                new ClaimsIdentity(ToClaims(firebaseToken.Claims), nameof(FirebaseAuthenticationHandler))
            }), JwtBearerDefaults.AuthenticationScheme));

        }

        private List<Claim> ToClaims(IReadOnlyDictionary<string, object> claims)
        {
            return new List<Claim>
            {
                new Claim("id", claims.GetValueOrDefault("user_id").ToString())
            };
        }
    }
}
