const workloadIds = [ 'city', 'shome', 'indiot', 'sensor1', 'sensor2', 'sensor3' ];
const protocolNetworksIds = [ 'tcp', 'udp', 'mqtt', 'coap', 'http' ];

$(function () {
  $('[data-run]').click(function () {
    $(this).addClass('disabled').text('Loading...');
    $("[data-charts]").addClass('is-loading');
    setTimeout(() => {
      $("[data-charts]").removeClass('d-none').removeClass('is-loading');
      $(this).removeClass('disabled').text('Run!');
      window.location.href = '/charts.html';
    }, 1000);
  });

  $(document).on('click', '.base-droppable.active', function (e) {
    e.preventDefault();
    const $item = $(this).find('.item');
    const itemId = $item.data('item-id');
    const $clone = $(this).find('.item').clone();
    const $card = $(this).parent().parent();
    $(this).removeClass('active');
    $card.removeClass(`card-active ${workloadIds.join(' ')} ${protocolNetworksIds.join(' ')}`);
    $item.remove();

    if (workloadIds.includes(itemId)) {
      $('#Workloads .card-body').append($clone);
    } else if (protocolNetworksIds.includes(itemId)) {
      $('#ProtocolNetworks .card-body').append($clone);
    } else {
      $('#ApplicationServer .card-body').append($clone);
    }

    makeDraggable();
    makeDroppables();
  });

  makeDraggable();
  makeDroppables();
});


function makeDroppables() {
  $("[data-droppable]").droppable({
    accept: "[data-draggable]",
    tolerance: "intersect",
    drop: function (event, ui) {
      $(ui.draggable).css({
        top: 0,
        left: 0
      });

      if ($(this).find('div[data-draggable]').length === 0) {
        const $item = $(this).find('.item');
        const itemId = $(ui.draggable).data('item-id');
        const workloadTitle = $(ui.draggable).find('p').text();
        $(this).append(ui.draggable);
        $item.css({
          left: 0,
          top: 0,
          height: '100%',
          width: '100%'
        }).removeClass('item');

        const $card = $(this).parent().parent();
        $card.addClass(`card-loading`);
        setTimeout(() => {
          $card.addClass(`card-active ${itemId}`).removeClass("card-loading");
          $card.find(`.card-header span`).text(workloadTitle);
        }, 1000);
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
}

function makeDraggable() {
  $('[data-draggable]').draggable({
    appendTo: "[data-droppable]",
    start: function (e, ui) {
      failure = true; // reset the flag
    },
    revert: function () {
      return failure;
    }
  });
}
