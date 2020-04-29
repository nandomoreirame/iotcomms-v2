$(function () {
  makeDraggable();

  $(".base").droppable({
    accept: "[data-card]",
    tolerance: "intersect",
    drop: function (event, ui) {
      if ($(this).find('div[data-card]').length == 0) {
        $(this).append(ui.draggable);
        $(this).find(".item").css({
          left: 0,
          top: 0,
          height: "100%",
          width: "100%"
        }).removeClass("item");
      } else {
        $(ui.draggable).css({
          top: 0,
          left: 0
        });
      }
      console.log("triggered drop");
      $(this).addClass("active");
    },
    out: function (event, ui) {
      $(this).removeClass("active");
    },
    over: function (event, ui) {
      $(this).addClass("active");
    }
  });
});

function makeDraggable() {
  console.log("hit");
  $('[data-card]').draggable({
    appendTo: ".base",
    start: function (e, ui) {
      failure = true; // reset the flag
    },
    revert: function () {
      $(this).parent().addClass("active");
      $(this).parent().parent().parent().addClass("card-active");
      console.log("reverted");
      return failure;
    }
  });
}
