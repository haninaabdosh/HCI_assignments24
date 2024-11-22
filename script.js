$(document).ready(function () {
    // Applying the error class if the input exceeds 10
    $(".number").on("blur", function () {
        const value = $(this).val();
        if (value && value.length > 10) {
            $(this).addClass("error");
        } else {
            $(this).removeClass("error");
        }
    });

    // Function to perform the operation
    function calculate(operation) {
        const num1 = parseFloat($("#num1").val());
        const num2 = parseFloat($("#num2").val());

        if (isNaN(num1) || isNaN(num2)) {
            $("#result").text("Please enter valid numbers.");
            return;
        }

        let result;
        switch (operation) {
            case "add":
                result = num1 + num2;
                break;
            case "subtract":
                result = num1 - num2;
                break;
            case "multiply":
                result = num1 * num2;
                break;
            case "divide":
                if (num2 === 0) {
                    $("#result").text("Cannot divide by zero.");
                    return;
                }
                result = num1 / num2;
                break;
        }
        $("#result").text(`Result: ${result}`);
    }

    // Event listeners for the buttons
    $("#add").on("click", function () {
        calculate("add");
    });

    $("#subtract").on("click", function () {
        calculate("subtract");
    });

    $("#multiply").on("click", function () {
        calculate("multiply");
    });

    $("#divide").on("click", function () {
        calculate("divide");
    });
});
