// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(() => {
    $(".change-burger").on("click", function (event) {
        event.preventDefault();
        const id = $(this).data("id");
        const newburger = $(this).data("newburger");

        const newburgerState = {
            devoured: !newburger
        };

        // Send the PUT request.
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: newburgerState
        }).then(
            () => {
                console.log("changed burger devoured to: ", !newburger);
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });

    $(".create-form").on("submit", (event) => {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();

        const newburger = {
            name: $("#burg").val().trim(),
            devoured: $("[name=devoured]:checked").val()
        };

        // Send the POST request.
        $.ajax("/api/burgers", {
            type: "POST",
            data: newburger
        }).then(
            () => {
                console.log("created new burger");
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });

    $(".delete-burger").on("click", function (event) {
        const id = $(this).data("id");

        // Send the DELETE request.
        $.ajax("/api/burgers/" + id, {
            type: "DELETE"
        }).then(
            () => {
                console.log("deleted burger: ", id);
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });

});
