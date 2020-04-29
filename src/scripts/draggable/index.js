$(function () {
  $('[data-run]').click(function () {
    $(this).addClass('disabled').text('Loading...');
    $("[data-charts]").addClass('is-loading');
    setTimeout(() => {
      $("[data-charts]").removeClass('d-none').removeClass('is-loading');
      $(this).removeClass('disabled').text('Run!');
    }, 1000);
  });

  makeDraggable();

  $("[data-droppable]").droppable({
    accept: "[data-card]",
    tolerance: "intersect",
    drop: function (event, ui) {
      $(ui.draggable).css({
        top: 0,
        left: 0
      });
      if ($(this).find('div[data-card]').length === 0) {
        const $item = $(this).find('.item');
        const workloadId = $(ui.draggable).data('workload');
        $(this).append(ui.draggable);
        $item.css({
          left: 0,
          top: 0,
          height: '100%',
          width: '100%'
        }).removeClass('item');
      }
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
    appendTo: "[data-droppable]",
    start: function (e, ui) {
      failure = true; // reset the flag
    },
    revert: function () {
      const $card = $(this).parent().parent().parent();

      $(this).parent().addClass("active");
      $card.addClass("card-loading");
      setTimeout(() => {
        $card.addClass("card-active").removeClass("card-loading");
      }, 1000);
      console.log("reverted");
      return failure;
    }
  });
}
