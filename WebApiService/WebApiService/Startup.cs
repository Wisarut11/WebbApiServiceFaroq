using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(WebApiService.Startup))]
namespace WebApiService
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
