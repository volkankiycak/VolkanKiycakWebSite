namespace api.Entity
{
    public class Comment
    {
        public int Id { get; set; } 
        public string ?FullName { get; set; } 
        public string ?Text { get; set; }
        public DateTime PublishedOn { get; set; }
        public int BlogDetailId { get; set; }
    }
}