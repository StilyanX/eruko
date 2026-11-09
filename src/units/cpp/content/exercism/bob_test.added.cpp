TEST_CASE("shouting_a_statement_containing_a_question_mark",
          "[3c954328-86fb-4c71-8961-e18d6a5e2517]") {
    REQUIRE("Whoa, chill out!" == bob::hey("DO LIONS EAT PEOPLE? AHHHHH."));
}
