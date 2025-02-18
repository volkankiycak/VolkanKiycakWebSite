using api.Entity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using api.Data;

namespace api.Controllers
{
    [ApiController]
    [Route("api/[controller]")]

    public class CommunicationController : ControllerBase
    {
        private readonly AppDbContext _context;

        public CommunicationController(AppDbContext context)
        {
            _context = context;
        }

        [HttpPost]
        public async Task<IActionResult> CreateCommunication(Communication communication)
        {
            _context.Communications.Add(communication);
            await _context.SaveChangesAsync();

            return Ok(communication);
        }

        [HttpGet]
        public async Task<IActionResult> GetCommunication()
        {
            var communications = await _context.Communications.ToListAsync();
            return Ok(communications);
        }
        
    }
}