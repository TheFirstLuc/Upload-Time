var checkbox = document.getElementById("input");
checkbox.checked = true;

checkbox.addEventListener("change", function() {
    var enabled_disabled = document.getElementsByClassName("enabled_disabled")[0];

    if (checkbox.checked) {
        enabled_disabled.innerHTML = "enabled";
        enabled_disabled.style.backgroundColor = "#44f321";
        addTime();
    } else {
        enabled_disabled.innerHTML = "disabled";
        enabled_disabled.style.backgroundColor = "#f12626";
    }
});
