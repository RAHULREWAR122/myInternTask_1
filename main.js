// Countdown timer
function updateCountdown() {
  const countdownElements = document.querySelectorAll(".countdown");
  countdownElements.forEach(function (element) {
    // Fetch data-start-time attribute value (assuming it's in UTC format from PHP)
    const startTimeUTC = new Date(
      element.getAttribute("data-start-time")
    ).getTime();
    // Get IST time from PHP (assuming it's correctly formatted and fetched in UTC+5:30)
    const istTime = new Date("2024-07-07 21:57:34").getTime();
    // Calculate the countdown time difference
    const distance = startTimeUTC - istTime;
    if (distance < 0) {
      element.innerHTML = "Match Started";
    } else {
      let days = Math.floor(distance / (1000 * 60 * 60 * 24));

      let hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);
      let countdownString = "";
      if (days > 0) {
        countdownString += days + "d ";
      }

      if (hours > 0 || days > 0) {
        // Show hours if they are greater than zero, or if days are present
        countdownString += hours + "h ";
      }

      countdownString += minutes + "m " + seconds + "s ";
      element.innerHTML = countdownString.trim();
    }
  });
}
// Call updateCountdown() initially to set up the countdown
updateCountdown();
// Call updateCountdown() every second to update the countdown dynamically
setInterval(updateCountdown, 1000);
// Function to toggle sections based on user selection
function toggleSection(section) {
  // Hide all sections
  const sections = document.querySelectorAll(".section");
  sections.forEach(function (sectionElement) {
    sectionElement.classList.remove("active");
  });
  // Show the selected section
  const selectedSection = document.querySelector(".section." + section);
  selectedSection.classList.add("active");
}
// Initially show the Upcoming Matches section
toggleSection("upcoming");

// Initialize the current category as "cricket"
let currentCategory = "cricket";

// Function to toggle the category between cricket and football
function toggleCategory(category) {
  // Select the match section element
  const matchSection = document.querySelector(".matchSection");
  // Update the match section text content based on the selected category
  matchSection.textContent =
    category === "cricket" ? "Cricket Matches" : "Football Matches";

  // Select the element that will display the team details
  const toggleTeam = document.querySelector(".match-box");

  // Check if the selected category is different from the current category
  if (category !== currentCategory) {
    // Update the current category
    currentCategory = category;
    // Toggle to the upcoming section (assuming this function is defined elsewhere)
    toggleSection("upcoming");
  }

  // Update the team details and match link based on the selected category
  if (category === "cricket") {
    toggleTeam.innerHTML = `
                   <div class="team-details">
                    <img src="https://img1.hscicdn.com/image/upload/f_auto/lsci/db/PICTURES/CMS/120600/120663.jpg" alt="Argentina"><span>Argentina</span><span> vs
                    </span><span>Brazil</span><img src="https://images.icc-cricket.com/image/upload/t_ratio16_9-size40/prd/p9snbe09wjmtgcncwm7n" alt="Brazil">
                </div>
                <p>Match Ended</p>
                <a href="fantesy/joined_contest.php?match_code=ARGVSBRA">Joined Match</a>
            </div>
         `;
  } else {
    toggleTeam.innerHTML = `
                   <div class="team-details">
                    <img src="https://c8.alamy.com/comp/2KEE5D2/01-jun-2022-italy-v-argentina-finalissima-2022-wembley-stadium-the-argentina-team-group-photo-before-the-match-against-italy-at-wembley-stadium-emiliano-martnez-nicols-tagliafico-nahuel-molina-rodrigo-de-paul-lionel-messi-ngel-di-mara-cristian-romero-guido-rodrguez-nicols-otamendi-giovani-lo-celso-lautaro-martnez-picture-credit-mark-pain-alamy-live-news-2KEE5D2.jpg" alt="Argentina"><span>Argentina</span><span> vs
                    </span><span>Brazil</span><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShgpEGmE1n9QFMCDqP9ZPLgDnOtu4dsYXSYQ&s" alt="Brazil">
                 </div>
                 <p>Match Ended</p>
                 <a href="fantesy/joined_contest.php?match_code=BRAVSARG">Joined Match</a>
                 </div>
                 `;
  }
}

// Function to handle navigation links in the menu
function goToLinks() {
  // Add event listener for when the DOM content is loaded
  document.addEventListener("DOMContentLoaded", function () {
    // Select the menu button, links list, and show list elements
    const menuBtn = document.querySelector(".menu");
    const myLinks = document.querySelector(".linksList");
    const showList = document.querySelector(".listShow");

    // Add click event listener to the menu button to toggle the display of the links list
    menuBtn.addEventListener("click", function (event) {
      myLinks.style.display =
        myLinks.style.display === "none" || myLinks.style.display === ""
          ? "block"
          : "none";
      // Prevent the event from propagating to other elements
      event.stopPropagation();
    });

    // Add click event listener to the document body to hide the links list when clicking outside of it
    document.body.addEventListener("click", function () {
      if (myLinks.style.display === "block") {
        myLinks.style.display = "none";
      }
    });
    // Prevent the event from propagating when clicking on the show list element
    showList.addEventListener("click", function (event) {
      event.stopPropagation();
    });
  });
}
// Initialize the goToLinks function to set up the event listeners
goToLinks();
