﻿using Microsoft.AspNetCore.Mvc;

namespace CommentApp.Controllers
{
    public class HomeController : Controller
    {
        // GET
        public IActionResult Index()
        {
            return View();
        }
    }
}