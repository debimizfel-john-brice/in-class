/// <reference path="jquery-3.7.0.js" />

$(() => {

    // $("#user_section_box").hide();

    $(".switcher").on("click", function () {
        const section = $(this).data("section");
        // $("#text_section_box").hide();
        // $("#user_section_box").hide();
        $(".section").hide();
        $("#" + section).show();
        $(".switcher").removeClass("active");
        $(this).addClass("active");
    });

    $("#search").on("click", async () => {
        const text_to_search = $("#search_box").val();

        const posts = await get_json("https://dummyjson.com/posts/search?q=" + text_to_search);

        display_posts(posts);

    });

    $("#posts_by_user_id").on("click", async () => {
        const user_id = $("#user_box").val();

        const posts = await get_json("https://dummyjson.com/posts/user/" + user_id);
        display_posts(posts);

    });


    function get_json(url) {
        return new Promise((resolve, reject) => {
            $.ajax({
                url,
                success: data => resolve(data),
                error: err => reject(err),
            });
        });
    }

    function display_posts(post_obj) {
        const posts = post_obj.posts;
        if (!posts.length) {
            $("main").html("<br>No post found...");
            return;
        }

        let content = `<h5>Posts found: ${posts.length}</h5>`;
        for (const post of posts) {
            content += get_post_html(post);
        }
        $("main").html(content);
    }

    function get_post_html(post) {
        return `<article>
        <h3>${post.title}</h3>
        <p>${post.body}</p>
        </article>`;
    }



    async function show_users() {
        const users = await get_json("https://dummyjson.com/users");
        display_users(users);
    }

    show_users();

    function display_users(users_obj) {
        const users = users_obj.users;
        let content = "";
        for (const user of users) {
            content += get_user_html(user);
        }
        $("#user_box").html(content);
    }

    function get_user_html(user) {
        return `<option value=${user.id}>${user.firstName} ${user.lastName}</option>`;
    }
});