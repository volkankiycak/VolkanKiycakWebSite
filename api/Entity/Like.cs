namespace api.Entity
{
    public class Like
    {
        public int Id { get; set; } 
        public int LikeCount   { get; set; } 
        public string ?FullName { get; set; } 
        public bool IsLiked  { get; set; }
        public DateTime PublishedOn { get; set; }
        public int PortfolioId { get; set; }
    }
}