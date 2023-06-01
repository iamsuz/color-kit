// Checck the occurencese of string one into string 2

/**
 * String 1 = ELO max 3 charactersß
 * String 2 = HELLOWORLD
 * occurences = 4 => ELO (1,2,4) ,(1,2,6), (1,3,4),(1,3,6)
 */

function occurrences(s1, s2) {
	// Helper function to find all indices of a character in a string from a given start index
	function findIndices(char, str, startIndex) {
		let indices = [];
		for (let i = startIndex; i < str.length; i++) {
			if (str[i] === char) {
				indices.push(i);
			}
		}
		return indices;
	}

	// Recursive function to count occurrences
	function countOccurrences(s1, s2, startIndex, s1Index) {
		if (s1Index === s1.length) {
			// If we have matched all characters in s1, it's a valid occurrence
			return 1;
		}

		let char = s1[s1Index];
		let indices = findIndices(char, s2, startIndex);
		let count = 0;

		for (let index of indices) {
			// Move to the next character in s1 and continue searching
			count += countOccurrences(s1, s2, index + 1, s1Index + 1);
		}

		return count;
	}

	// Start the recursive process
	return countOccurrences(s1, s2, 0, 0);
}

let result = occurrences("ELO", "HELLOWORLD");
console.log(result); // Output: 4
