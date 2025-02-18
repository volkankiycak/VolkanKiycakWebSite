using api.Data;
using api.Entity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace api.Controllers
{
    [ApiController]
    [Route("api/[controller]")]

    public class CommentController : ControllerBase
    {
        private readonly AppDbContext _context;
        public CommentController(AppDbContext context)
        {
            _context = context;
        }
        [HttpPost]
        public async Task<IActionResult> CreateCommunication(Comment comment)
        {
            _context.Comments.Add(comment);
            await _context.SaveChangesAsync();

            return Ok(comment);
        }
        [HttpGet]
        public IActionResult GetComments([FromQuery] int blogDetailId)
        {
            var comments = _context.Comments
                .Where(c => c.BlogDetailId == blogDetailId)
                .OrderByDescending(c => c.PublishedOn)
                .ToList();
            return Ok(comments);
        }
    }
}