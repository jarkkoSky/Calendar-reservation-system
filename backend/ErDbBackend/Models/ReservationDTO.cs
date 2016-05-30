﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ErDbBackend.Models
{
    public class ReservationDTO
    {
        public int ID { get; set; }
        public string EMAIL { get; set; }
        public string FIRSTNAME { get; set; }
        public string LASTNAME { get; set; }
        public bool RESERVED { get; set; }
    }
}