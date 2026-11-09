TEST_CASE("Non-existing codon can't translate",
          "[1e75ea2a-f907-4994-ae5c-118632a1cb0f]") {
    REQUIRE_THROWS(protein_translation::proteins("AAA"));
}

TEST_CASE("Unknown amino acids, not part of a codon, can't translate",
          "[9eac93f3-627a-4c90-8653-6d0a0595bc6f]") {
    REQUIRE_THROWS(protein_translation::proteins("XYZ"));
}

TEST_CASE("Incomplete RNA sequence can't translate",
          "[9d73899f-e68e-4291-b1e2-7bf87c00f024]") {
    REQUIRE_THROWS(protein_translation::proteins("AUGU"));
}

TEST_CASE("Incomplete RNA sequence can translate if valid until a STOP codon",
          "[43945cf7-9968-402d-ab9f-b8a28750b050]") {
    REQUIRE(vector<string>{"Phenylalanine", "Phenylalanine"} ==
            protein_translation::proteins("UUCUUCUAAUGGU"));
}
