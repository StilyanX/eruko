TEST_CASE("wide_characters") {
    REQUIRE("猫子" == reverse_string::reverse_string("子猫"));
}

TEST_CASE("grapheme_cluster_with_pre_combined_form") {
    REQUIRE("dnatsnehctsrüW" ==
            reverse_string::reverse_string("Würstchenstand"));
}
