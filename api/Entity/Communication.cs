using System.ComponentModel.DataAnnotations;

namespace api.Entity
{
    public class Communication
    {
        public int Id { get; set; }
        [Required]
        public string? Name { get; set; }
        [Required]
        public string? Email { get; set; }
        [Required]
        public string? Phone { get; set; }
        [Required]
        public string? Message { get; set; }
    }
}