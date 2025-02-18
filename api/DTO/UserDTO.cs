using System.ComponentModel.DataAnnotations;

namespace api.DTO
{
    public class UserDto
    {
        [Required]
        public string FullName { get; set; } = null!;
        [Required]
        public string UserName { get; set; } = null!;
        [Required]
        public string Email { get; set; } = null!;
        [Required]
        public string Password { get; set; } = null!;
    }
}