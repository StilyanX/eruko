TEST_CASE("Perfect square abundant number is classified correctly",
          "[05f15b93-849c-45e9-9c7d-1ea131ef7d10]") {
    REQUIRE(perfect_numbers::classification::abundant ==
            perfect_numbers::classify(196));
}
