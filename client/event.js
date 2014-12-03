Template.header.events({
    'click ul.nav': function(e, t) {

        var ul = $(e.currentTarget);
            allLIs=ul.find("li"),
            li=$(e.target).parent();
        ul.find("li").removeClass("active");
        li.addClass("active")
    }
});
Template.employeeDetail.events({
    'submit #employeeDetail': function(e, t) {
        e.preventDefault();

        var forgotPasswordForm = $(e.currentTarget),
            email = trimInput(forgotPasswordForm.find('#forgotPasswordEmail').val().toLowerCase());

        if (isNotEmpty(email) && isEmail(email)) {
            Accounts.forgotPassword({email: email}, function(err) {
                if (err) {
                    if (err.message === 'User not found [403]') {
                        Session.set('alert', 'This email does not exist.');
                    } else {
                        Session.set('alert', 'We\'re sorry but something went wrong.');
                    }
                } else {
                    Session.set('alert', 'Email Sent. Please check your mailbox to reset your password.');

                }
            });
        }
        return false;
    },

    'click #returnToSignIn': function(e, t) {
        Session.set('showForgotPassword', null);
        return false;
    }
});
Template.employee.events({
    'click #detail': function(e, t) {
        e.preventDefault();

        Router.go("/detail");
    },

    'click #teamStatus': function(e, t) {
        e.preventDefault();

        Router.go("/team");
    }
});
Template.teamInfo.events({
    'click button': function(e, t) {
        e.preventDefault();

        Router.go("/approve");
    }
});
Template.approval.events({
    'click #later': function(e, t) {
        e.preventDefault();

        Router.go("/profile");
    }
});
Template.pendingApprovals.events({
    'click button': function(e, t) {
        e.preventDefault();

        Router.go("/approve");
    }
});
Template.twoColumnLayout.events({
    'click #menu-toggle': function(e, t) {
        e.preventDefault();

        $("#wrapper").toggleClass("active");
    }
});
