angular.module("app.templates", []).run(["$templateCache", function($templateCache) {$templateCache.put("index.html","<html><head><meta charset=utf-8><meta name=viewport content=\"width=device-width, initial-scale=1\"><meta http-equiv=X-UA-Compatible content=\"IE=edge\"><link rel=stylesheet type=text/css href=css/lib.css><link rel=stylesheet type=text/css href=css/main.css></head><body><div ng-view></div><script src=js/lib.js></script><script src=js/main.js></script></body></html>");
$templateCache.put("features/home/home.html","<div class=\"navbar navbar-default navbar-fixed-top\"><div class=container><div class=navbar-header><a class=navbar-brand>BasCal</a> <button class=navbar-toggle type=button data-toggle=collapse data-target=#navbar-main><span class=icon-bar></span> <span class=icon-bar></span> <span class=icon-bar></span></button></div><div class=\"navbar-collapse collapse\" id=navbar-main><ul class=\"nav navbar-nav\"><li><a href>Help</a></li></ul><ul class=\"nav navbar-nav navbar-right\"><li class=dropdown><a class=dropdown-toggle data-toggle=dropdown href=# id=links>Links <span class=caret></span></a><ul class=dropdown-menu aria-labelledby=links><li><a target=_blank href=\"http://www.basware.com/\">Basware</a></li><li><a target=_blank href=https://github.com/jyrihogman/Calendar-reservation-system>GitHub repository</a></li><li class=divider></li><li><a target=_blank href=\"http://www.dotabuff.com/\">Dotabuff</a></li><li><a target=_blank href=http://www.goal.com>Goal.com</a></li><li><a target=_blank href=\"http://www.iltalehti.fi/\">Iltalehti</a></li></ul></li></ul></div></div></div><div class=container><div class=page-header id=banner><div class=row><div class=\"col-lg-8 col-lg-offset-3 col-md-7 col-sm-6\"><h1><b>BasCal Reservation Booking</b></h1><p class=\"lead col-lg-offset-3\">Pick a date</p><p class=\"lead col-lg-offset-3\">Pick a time</p></div></div></div><div class=row><div class=\"col-lg-6 col-lg-offset-3\"><calendar selected=home.selectedDay></calendar></div></div><div class=row><div class=\"col-lg-6 col-lg-offset-3\"><br><br><div class=\"well bs-component\"><bookingform selected=home.getReservationContainer(home.selectedDay)></bookingform></div></div></div></div>");
$templateCache.put("features/home/bookingform/bookingform.html","<form name=BookingForm class=form-horizontal><fieldset><legend>{{ $book.dateToMoment() }}</legend><div class=form-group><label for=select class=\"col-lg-2 control-label\">Time</label><div class=col-lg-10><select class=form-control id=select ng-model=$book.selectedReservation ng-options=\"reservation.time for reservation in $book.isAvailable() track by reservation.id\" required><option value>Choose here</option></select></div></div><div ng-if=$book.selectedReservation.id><div class=form-group><label for=inputEmail class=\"col-lg-2 control-label\">Email</label><div class=col-lg-10><input type=email class=form-control id=inputEmail placeholder=Email ng-model=$book.selectedReservation.email ng-pattern=$book.emailPattern required></div></div><div class=form-group><label for=inputName class=\"col-lg-2 control-label\">Name</label><div class=col-lg-10><input type=name class=form-control name=firstname placeholder=\"First name\" ng-model=$book.selectedReservation.firstname ng-pattern=$book.matchPattern required><br><input type=name class=form-control name=lastname placeholder=\"Last name\" ng-model=$book.selectedReservation.lastname ng-pattern=$book.matchPattern required></div></div><div class=form-group><div class=\"col-lg-10 col-lg-offset-2\"><button type=submit class=\"btn btn-primary\" ng-click=$book.submit() ng-disabled=BookingForm.$invalid>Submit</button> <button type=reset class=\"btn btn-default\">Clear</button></div></div></div></fieldset></form>");
$templateCache.put("features/home/calendar/calendar.html","<div class=header><i class=\"fa fa-angle-left\" ng-click=$cal.previous()></i> <span>{{$cal.month.format(\'MMMM, YYYY\')}}</span> <i class=\"fa fa-angle-right\" ng-click=$cal.next()></i></div><div class=\"week names\"><span class=day>Mon</span> <span class=day>Tue</span> <span class=day>Wed</span> <span class=day>Thu</span> <span class=day>Fri</span> <span class=day>Sat</span> <span class=day>Sun</span></div><div class=week ng-repeat=\"week in $cal.weeks\"><span class=day ng-class=\"{ today: day.isToday, \'different-month\': !day.isCurrentMonth, selected: day.date.isSame($cal.selected), beforetoday: day.date.isBefore(moment(\'YYYY-MM-DD\'), \'day\') }\" ng-click=$cal.select(day) ng-repeat=\"day in week.days\">{{day.number}}</span></div>");
$templateCache.put("styles/fonts/4.4.0/index.html","<!DOCTYPE html><html><head><link rel=stylesheet href=https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.css></head><body><h1>4.4.0</h1><table><tr><td><i class=\"fa fa-1x fa-file-pdf-o\"></i></td><td><i class=\"fa fa-1x fa-cog\"></i></td><td><i class=\"fa fa-1x fa-shield\"></i></td><td><i class=\"fa fa-1x fa-ship\"></i></td><td><i class=\"fa fa-1x fa-angle-double-up\"></i></td><td><i class=\"fa fa-1x fa-angle-double-down\"></i></td><td><i class=\"fa fa-1x fa-file-o\"></i></td></tr><tr><td><i class=\"fa fa-2x fa-file-pdf-o\"></i></td><td><i class=\"fa fa-2x fa-cog\"></i></td><td><i class=\"fa fa-2x fa-shield\"></i></td><td><i class=\"fa fa-2x fa-ship\"></i></td><td><i class=\"fa fa-2x fa-angle-double-up\"></i></td><td><i class=\"fa fa-2x fa-angle-double-down\"></i></td><td><i class=\"fa fa-2x fa-file-o\"></i></td></tr><tr><td><i class=\"fa fa-3x fa-file-pdf-o\"></i></td><td><i class=\"fa fa-3x fa-cog\"></i></td><td><i class=\"fa fa-3x fa-shield\"></i></td><td><i class=\"fa fa-3x fa-ship\"></i></td><td><i class=\"fa fa-3x fa-angle-double-up\"></i></td><td><i class=\"fa fa-3x fa-angle-double-down\"></i></td><td><i class=\"fa fa-3x fa-file-o\"></i></td></tr><tr><td><i class=\"fa fa-4x fa-file-pdf-o\"></i></td><td><i class=\"fa fa-4x fa-cog\"></i></td><td><i class=\"fa fa-4x fa-shield\"></i></td><td><i class=\"fa fa-4x fa-ship\"></i></td><td><i class=\"fa fa-4x fa-angle-double-up\"></i></td><td><i class=\"fa fa-4x fa-angle-double-down\"></i></td><td><i class=\"fa fa-4x fa-file-o\"></i></td></tr><tr><td><i class=\"fa fa-5x fa-file-pdf-o\"></i></td><td><i class=\"fa fa-5x fa-cog\"></i></td><td><i class=\"fa fa-5x fa-shield\"></i></td><td><i class=\"fa fa-5x fa-ship\"></i></td><td><i class=\"fa fa-5x fa-angle-double-up\"></i></td><td><i class=\"fa fa-5x fa-angle-double-down\"></i></td><td><i class=\"fa fa-5x fa-file-o\"></i></td></tr></table></body></html>");}]);export {};