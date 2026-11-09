TEST_CASE("Measure using bucket one much bigger than bucket two",
          "[58d70152-bf2b-46bb-ad54-be58ebe94c03]") {
    auto bucket1_capacity = 5;
    auto bucket2_capacity = 1;
    auto goal_volume = 2;
    auto start_bucket = two_bucket::bucket_id::one;

    auto actual = two_bucket::measure(bucket1_capacity, bucket2_capacity,
                                      goal_volume, start_bucket);

    CHECK(actual.num_moves == 6);
    CHECK(actual.goal_bucket == two_bucket::bucket_id::one);
    CHECK(actual.other_bucket_volume == 1);
}

TEST_CASE("Measure using bucket one much smaller than bucket two",
          "[9dbe6499-caa5-4a58-b5ce-c988d71b8981]") {
    auto bucket1_capacity = 3;
    auto bucket2_capacity = 15;
    auto goal_volume = 9;
    auto start_bucket = two_bucket::bucket_id::one;

    auto actual = two_bucket::measure(bucket1_capacity, bucket2_capacity,
                                      goal_volume, start_bucket);

    CHECK(actual.num_moves == 6);
    CHECK(actual.goal_bucket == two_bucket::bucket_id::two);
    CHECK(actual.other_bucket_volume == 0);
}
