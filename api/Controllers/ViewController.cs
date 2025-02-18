using api.Data;
using api.Entity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace api.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ViewController : ControllerBase
    {
        private readonly AppDbContext _context;
        public ViewController(AppDbContext context)
        {
            _context = context;
        }
        
        [HttpPost]
        public async Task<IActionResult> CreateView(View view)
        {
            var existingView = await _context.Views
                .FirstOrDefaultAsync(v => v.FullName == view.FullName && v.PortfolioId == view.PortfolioId);

            if (existingView != null)
            {
                return Conflict();
            }

            _context.Views.Add(view);
            await _context.SaveChangesAsync();

            return Ok(view);
        }

        [HttpGet]
        public async Task<IActionResult> GetView()
        {
            var portfolioCounts = await _context.Views
                .GroupBy(v => v.PortfolioId)
                .Select(group => new
                {
                    PortfolioId = group.Key,
                    ViewCount = group.Count()
                })
                .ToListAsync();

            return Ok(portfolioCounts);
        }
    }
}