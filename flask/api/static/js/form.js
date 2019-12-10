app.controller("formCtrl", function($scope, $http) {
    let add_event =
    {
        title: "Add New Event",
        submitText: "Start Tracking Attendance",
        fields:
        [
            {
                id: "title",
                type: "text",
                value: ""
            },
            {
                id: "date",
                type: "date",
                value: ""
            },
            {
                id: "name-of-volunteer",
                type: "text",
                value: ""
            },
            {
                id: "tags",
                type: "textarea",
                value: "",
                rows: 3
            },
            {
                id: "attendance",
                type: "int",
                value: ""
            },

        ]
    };
    let add_member =
    {
        title: "Add New Member",
        fields: 
        [
            {
                id: "status",
                subFields: 
                [
                    {
                        type: "radio",
                        value: "active"
                    },
                    {
                        type: "radio",
                        value: "innactive"
                    }
                ]
            },
            {
                id: "name",
                type: "text",
                value: ""
            },
            {
                id: "email",
                type: "text",
                value: ""
            },
            {
                id: "company",
                type: "text",
                value: ""
            },
            {
                id: "last-payment",
                type: "text",
                value: ""
            },
            {
                id: "tags",
                type: "textarea",
                value: "",
                rows: 3
            },
        ]
    };
    let add_outreach =
    {
        title: "Add New Outreach",
        fields:
        [
            {
                id: "name",
                type: "text",
                value: ""
            },
            {
                id: "email",
                type: "text",
                value: ""
            },
            {
                id: "company",
                type: "text",
                value: ""
            },
            {
                id: "last-payment",
                type: "text",
                value: ""
            },
            {
                id: "tags",
                type: "textarea",
                value: "",
                rows: 3
            },
        ]
    };
    $scope.form = add_event;
});

app.filter('capitalize', function() {
    return function(text) {
      return (!!text) ? text.charAt(0).toUpperCase() + text.substr(1).toLowerCase().replace(/-/g, ' ') : '';
    }
});