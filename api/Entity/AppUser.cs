using Microsoft.AspNetCore.Identity;

namespace api.Entity
{
    public class AppUser:IdentityUser<int>
    {
        public string FullName { get; set; } = null!;
        public DateTime DateAdded { get; set; }
        public bool IsDeleted { get; internal set; }
    }
}