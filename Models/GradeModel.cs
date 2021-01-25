using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace FirstWebApp_HaileyHullinger.Models
{
    public class GradeModel
    {
        //these one lines are declaring the variable in the model and creating getter and setter methods as a shortcut
        //double referes to a number with decimal points

        //this is the validator for the model methods
        [Range(0.0, 100.0)] 
        public double Assignments { get; set; }
        [Range(0.0, 100.0)]
        public double Group { get; set; }
        [Range(0.0, 100.0)]
        public double Quizzes { get; set; }
        [Range(0.0, 100.0)]
        public double Exams { get; set; }
        [Range(0.0, 100.0)]
        public double Intex { get; set; }

    }
}
