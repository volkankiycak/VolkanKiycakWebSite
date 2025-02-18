namespace api.Entity
{
    public class View
    {
        public int Id { get; set; }
        public string? FullName { get; set; }
        public DateTime PublishedOn { get; set; }
        public int PortfolioId { get; set; }
    }
}