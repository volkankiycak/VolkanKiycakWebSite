using api.Data;
using api.Entity;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace api.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class LikeController : ControllerBase
    {
        private readonly AppDbContext _context;
        public LikeController(AppDbContext context)
        {
            _context = context;
        }

        [HttpPost]
        public async Task<IActionResult> CreateLike(Like like)
        {
            var existingLike = await _context.Likes
                .FirstOrDefaultAsync(l => l.PortfolioId == like.PortfolioId && l.FullName == like.FullName);

            if (existingLike != null)
            {
                existingLike.LikeCount = like.LikeCount;
                existingLike.IsLiked = like.IsLiked;
                existingLike.PublishedOn = like.PublishedOn;

                _context.Likes.Update(existingLike);
                await _context.SaveChangesAsync();
                return Ok(existingLike);
            }

            _context.Likes.Add(like);
            await _context.SaveChangesAsync();
            return Ok(like);
        }

        [HttpGet]
        public async Task<IActionResult> GetLike()
        {
            var LikesCounts = await _context.Likes
                .Where(v => v.IsLiked)
                .GroupBy(v => v.PortfolioId)
                .Select(group => new
                {
                    PortfolioId = group.Key,
                    LikeCount = group.Count()
                })
                .ToListAsync();

            return Ok(LikesCounts);
        }

        [HttpGet("check")]
        public async Task<IActionResult> CheckLikeStatus(string fullName, int portfolioId)
        {
            var like = await _context.Likes
                .FirstOrDefaultAsync(l => l.PortfolioId == portfolioId && l.FullName == fullName);

            if (like == null)
            {
                return Ok(new { isLiked = false });
            }

            return Ok(new { isLiked = like.IsLiked });
        }

    }
}