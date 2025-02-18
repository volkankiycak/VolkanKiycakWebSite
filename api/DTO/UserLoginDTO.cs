using System.ComponentModel.DataAnnotations;

namespace api.DTO
{
    public class UserLoginDTO
    {
        [Required]
        public string Email { get; set; } = null!;
        [Required]
        public string Password { get; set; } = null!;
    }
}