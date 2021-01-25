using FirstWebApp_HaileyHullinger.Models;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FirstWebApp_HaileyHullinger.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }


        [HttpGet("Grade")]
        public IActionResult Grade()
        {
            return View();
        }

        //overloading the model by having two methods of the same name, but different peramaters being passed into them
        [HttpPost("Grade")]
        public IActionResult Grade(GradeModel model)
        {
            return View();
        }
    }
}
