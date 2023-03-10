using FirebaseAdmin;
using Google.Apis.Auth.OAuth2;
using LearningApp_Backend.Accessors;
using LearningApp_Backend.Authentication;
using LearningApp_Backend.Database.Configs;
using LearningApp_Backend.Managers;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Authentication.JwtBearer;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

// Dependency Inject Firebase App
builder.Services.AddSingleton(FirebaseApp.Create(new AppOptions()
{
    Credential = GoogleCredential.FromJson(builder.Configuration.GetValue<string>("FIREBASE_CONFIG"))
}));

// Adds Custom Firebase Token Authentication
builder.Services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
    .AddScheme<AuthenticationSchemeOptions, FirebaseAuthenticationHandler>(
    JwtBearerDefaults.AuthenticationScheme,
    null
    );

// MongoDB Configs
builder.Services.Configure<UsersConfigs>(
        builder.Configuration.GetSection("UsersDatabase"
    ));

builder.Services.AddSingleton<UsersAccessor>();

builder.Services.AddTransient<UsersManager>();


var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

// These have to be in this order because jesus christ
app.UseAuthentication();
app.UseAuthorization();

// Puts [Authorize] tag on all endpoints
app.MapControllers().RequireAuthorization();

app.Run();
