<script>
    // Popup එක විවෘත කිරීමේ Function එක
    function openDesigns() {
        const modal = document.getElementById('design-modal');
        
        // CSS එකේ Flex properties හරියට වැඩ කරන්න නම් මෙතන "flex" තිබිය යුතුයි
        modal.style.display = "flex"; 
        
        // Popup එක ඇරී ඇති විට පිටුපස (background) scroll වීම වැළැක්වීමට
        document.body.style.overflow = "hidden"; 
    }

    // Popup එක වසා දැමීමේ Function එක
    function closeDesigns() {
        const modal = document.getElementById('design-modal');
        modal.style.display = "none";
        
        // නැවත background scroll එක සාමාන්‍ය තත්වයට පත් කිරීමට
        document.body.style.overflow = "auto";
    }

    // Modal එකෙන් පිටත (අඳුරු ප්‍රදේශයේ) click කළොත් එය වසා දැමීමට
    window.onclick = function(event) {
        let modal = document.getElementById('design-modal');
        if (event.target == modal) {
            closeDesigns();
        }
    }
</script>