/**
 *dropload.js
 *
 *@author Josh Parsons<joshwp528@gmail.com>
 *@date March 15th 2015
 *@description - A javascript library that takes a <select> tag with id="drop" and automatically populates it with the proper provinces/states
 *              depending on which country is selected
 *
 *@notes
 *  - Requires JQuery to work properly
 *  RULES:
 *    -Run plugin on any "select" element
 *    -Dynamically creates the drop down list based on your options
 *
 *  TODO:
 *    -edit custom for initial and secondary arrays
 *      -assign to local variable by giving the two dimensional array the primary list (i.e array[0][1] is an element, but array[0] is an array)
 */
//declarations and initialization
(function($){
  var countries = [
    ["Canada", "CA"],
    ["United States", "US"]
  ];

  var country_choices = [
    [["Alberta", "AB"], ["British Columbia", "BC"], ["Manitoba","MB"],
    ["New Brunswick", "NB"], ["Newfoundland & Laborador", "NL"], ["Nova Scotia", "NS",],
    ["Northwest Territories","NT"], ["Nunavut","NU"], ["Ontario","ON"],
    ["Prince Edward Island", "PEI"],["Quebec", "QC"], ["Saskatchewan", "SK"], ["Yukon Territory", "YT"]],

    [["Alabama", "AL"], ["Alaska", "AK"], ["Arizona", "AZ"], ["Arkansas", "AR"], ["California", "CA"],
    ["Colorado", "CO"], ["Connecticut", "CT"], ["Delaware", "DE"], ["Florida", "FL"], ["Georgia", "GA"],
    ["Hawaii", "HI"], ["Idaho", "ID"], ["Illinois", "IL"], ["Indiana", "IN"], ["Iowa", "IA"],
    ["Kansas", "KS"], ["Kentucky", "KY"], ["Louisiana", "LA"], ["Maine", "ME"], ["Maryland", "MD"],
    ["Massachusetts", "MA"], ["Michigan", "MI"], ["Minnesota", "MN"], ["Mississippi", "MS"], ["Missouri", "MO"],
    ["Montana", "MT"], ["Nebraska", "NE"], ["Nevada", "NV"], ["New Hampshire", "NH"], ["New Jersey", "NJ"],
    ["New Mexico", "NM"], ["New York", "NY"], ["North Carolina", "NC"], ["North Dakota", "ND"], ["Ohio", "OH"],
    ["Oklahoma", "OK"], ["Oregon", "OR"], ["Pennsylvania", "PA"], ["Rhode Island", "RI"], ["South Carolina", "SC"],
    ["South Dakota", "SD"], ["Tennessee", "TN"], ["Texas", "TX"], ["Utah", "UT"], ["Vermont", "VT"],
    ["Virginia", "VA"], ["Washington", "WA"], ["West Virginia", "WV"], ["Wisconsin", "WI"], ["Wyoming", "WY"]]
  ];

  function changeList(id, options){
    $("#"+id).empty();
    var dl_change = document.getElementById(id);
    for(var i = 0; i < options.length; ++i){
      var e = document.createElement("option");
      e.textContent = options[i][0];
      e.value = options[i][1];
      dl_change.appendChild(e);
    }//end for
  }//end changeList

  $.fn.dropload = function(options){
    var settings = $.extend({
      initialOptions    : countries,//a 2d array. first will be the option, the second will be it's value. i.e array[0][0]is written in, array[0][1] is passed as the value
      secondaryOptions  : country_choices,//array multi-dimension array containing the secondary options of the initial index
      firstOption       : "Select a Province/State...",//used as a placeholder when the select field is generated
      name              : "country",
      labelValue        : "Province/State:",//text seen on the label
      complete          : null
    }, options);

    //get the id of the element being used
    var id = $(this).selector;

    //find the mode
    //split the id selector to grab the element by id
        var split = id.split("#");
        var dropload = document.getElementById(split[1]);

        //fill the initial text element with the initial text/values
        for(var i = 0; i < settings.initialOptions.length; ++i){
          var e = document.createElement("option");
          e.textContent = settings.initialOptions[i][0];
          e.value = settings.initialOptions[i][1];
          dropload.appendChild(e);
        }//end for
        $("<label>").attr('for', settings.name).attr('id', 'lbl'+settings.name).attr('class', 'label').html(settings.labelValue).insertAfter(id);
        $("<br/>").insertBefore("#lbl"+settings.name);
        $("<select>").attr({
          name: settings.name,
          'class' : 'dropdown',
          id: split[1]+"_choice"
        }).insertAfter("#lbl"+settings.name);

        var choice = document.getElementById(split[1]+"_choice");
        var op = document.createElement("option");
        op.textContent = settings.firstOption;
        op.value = "";
        choice.appendChild(op);

        $(id).change(function(){
          ops = settings.secondaryOptions[($('option:selected',$(this)).index()-1)];
          changeList(split[1]+"_choice", ops);
        });

    if ($.isFunction(settings.complete)) {
      settings.complete.call(this);
    }
    return this;
  }//end dropload
}(jQuery));