//this is for searching

    
        // Sample search index
        const searchIndex = [
            { title: "About", url: "About.html", content: "computer science student blockchain sezan about Barishal Dhaka Arafath Islam" },
            { title: "Projects", url: "Projects.html", content: "flutter web app ecommerce portfolio about" },
            { title: "Skills", url: "Skills.html", content: "html css js php mysql blockchain iot C C++ Java JavaScript Dart ETH Ether" },
            { title: "Resume", url: "Resume.html", content: "education experience qualification resume download Resume" },
            { title: "Contact", url: "Contact.html", content: "email phone github facebook linkedin Contact" },
            { title: "Education", url: "Education.html", content: "green university bangladesh stamford college town school govt model " }
        ];

        function handleSearch(event) {
            event.preventDefault();
            const query = document.getElementById("searchInput").value.toLowerCase();
            const resultContainer = document.getElementById("searchResults");

            resultContainer.innerHTML = "";

            if (!query) return;

            const results = searchIndex.filter(item => item.content.includes(query));

            if (results.length === 0) {
                resultContainer.innerHTML = `<p class="text-danger">No results found for "<strong>${query}</strong>"</p>`;
            } else {
                results.forEach(item => {
                    resultContainer.innerHTML += `
          <div class="mb-2">
            <a href="${item.url}" class="text-primary h5">${item.title}</a>
          </div>
        `;
                });
            }
        }
    