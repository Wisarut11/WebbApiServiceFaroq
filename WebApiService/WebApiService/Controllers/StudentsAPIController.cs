using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web.Http;
using System.Web.Http.Description;
using WebApiService.Models;

namespace WebApiService.Controllers
{
    public class StudentsAPIController : ApiController
    {
        private StudentsDB db = new StudentsDB();

        // GET: api/StudentsAPI
        public IQueryable<Students> GetStudents()
        {
            return db.Students;
        }

        // GET: api/StudentsAPI/5
        [ResponseType(typeof(Students))]
        public async Task<IHttpActionResult> GetStudents(int id)
        {
            Students students = await db.Students.FindAsync(id);
            if (students == null)
            {
                return NotFound();
            }

            return Ok(students);
        }

        // PUT: api/StudentsAPI/5
        [ResponseType(typeof(void))]
        public async Task<IHttpActionResult> PutStudents(int id, Students students)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != students.Id)
            {
                return BadRequest();
            }

            db.Entry(students).State = EntityState.Modified;

            try
            {
                await db.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!StudentsExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return StatusCode(HttpStatusCode.NoContent);
        }

        // POST: api/StudentsAPI
        [ResponseType(typeof(Students))]
        public async Task<IHttpActionResult> PostStudents(Students students)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.Students.Add(students);
            await db.SaveChangesAsync();

            return CreatedAtRoute("DefaultApi", new { id = students.Id }, students);
        }

        // DELETE: api/StudentsAPI/5
        [ResponseType(typeof(Students))]
        public async Task<IHttpActionResult> DeleteStudents(int id)
        {
            Students students = await db.Students.FindAsync(id);
            if (students == null)
            {
                return NotFound();
            }

            db.Students.Remove(students);
            await db.SaveChangesAsync();

            return Ok(students);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool StudentsExists(int id)
        {
            return db.Students.Count(e => e.Id == id) > 0;
        }
    }
}