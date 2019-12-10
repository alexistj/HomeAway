app.controller("tableCtrl", function($scope, $http) {
    $scope.table = 
    {
        caption: "Members",
        canEdit: true,
        headings: 
        [
            "Status",
            "Name",
            "Email",
            "Tags",
            "Company",
            "Last date of payment"
        ],
        data:
        [
            [
                "Active",
                "Jane Doe",
                "jdoe@gmail.com",
                "Lead education director",
                "Company A",
                "2019/01/01"
            ],
            [
                "Cancelled",
                "John Smith",
                "jsmith@gmail.com",
                "Lead community liaison",
                "Company B",
                "2019/01/01"
            ],
            [
                "Free Trial",
                "Bob Doughnut",
                "bdough@gmail.com",
                "Volunteer",
                "Company C",
                "2019/01/01"
            ]
        ]
    };
});
