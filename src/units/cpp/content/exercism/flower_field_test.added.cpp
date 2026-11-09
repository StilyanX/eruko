TEST_CASE("multiple adjacent flowers",
          "[6e4ac13a-3e43-4728-a2e3-3551d4b1a996]") {
    const std::vector<std::string> expected{"1**1"};
    REQUIRE(expected == flower_field::annotate({" ** "}));
}
