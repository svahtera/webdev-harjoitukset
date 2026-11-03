        "use strict";
        let aanestajat;

        let count = parseInt(prompt("Kuinka monta ehdokasta?"));
        let candidates = [];

        for (let i = 0; i < count; i++) {
            entryName = prompt("Ehdokkaan nimi");
            const candidate = {
                name: entryName,
                votes: 0
            };
            candidates.push(candidate);
        };

        console.log("ehdokkaat kirjattu");

        aanestajat = parseInt(prompt("Kuinka monta äänestäjää"));

        for (let i = 0; i < aanestajat; i++){
            let aani = prompt("Ketä äänestät?");
            for (let entry in candidates) {
                if (candidates[entry].name === aani){
                    candidates[entry].votes = candidates[entry].votes + 1;
                    console.log("ääni kirjattu")
                    break;
                }
            }
        }

        let winner = {
            name: "nil",
            votes: -1
        };

        for (let entry in candidates){
            const candidate = candidates[entry];
            if (candidate.votes > winner.votes) {
                winner = candidate;
            }
        }

        console.log("Voittaja on " + winner.name + " " +  winner.votes + " äänellä.");
        console.log("Tulokset: ");

        for (let entry in candidates){
            const candidate = candidates[entry];
            console.log(candidate.name + ": " + candidate.votes + " ääntä.");
        }
    