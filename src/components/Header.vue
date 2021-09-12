<script>
    export default {

    }
</script>
<template>
    <header class="header">
        <div class="header_left-area">
            <div class="header_logo"></div>
            <ul class="header_nav">
                <li>
                    <router-link class="feed" to="/"></router-link>
                </li>

                <li>
                    <router-link class="network" to="/network"></router-link>
                </li>
                <li>
                    <router-link class="jobs" to="/jobs"></router-link>
                </li>
                <li>
                    <router-link class="chats" to="/chats"></router-link>
                </li>
                <li>
                    <router-link class="notices" to="/notices"></router-link>
                </li>

            </ul>

            <div class="header_search">
                <input type="text">
            </div>
        </div>
        <div class="header_right-area">
            <div class="header_profile">
                <img src="~@/assets/logo.png" alt="">
                <div class="header_list-infor">
                    <div class="header_list-infor-name">
                        test
                    </div>
                    <div class="header_list-infor-time">
                        <span>367 views today</span><i>33</i>
                    </div>
                </div>
            </div>
            <div class="header_right-btn">
                <a href="" class="other"></a>
            </div>
        </div>
    </header>
</template>
<style lang="scss" scope>
    $header_url:"~@/assets/img/header/";

    @mixin nav_bg($img) {
        background-image: url("#{$header_url}#{$img}");
        width: 90px;
        height: 100%;
        background-size: cover;
        display: block;

    }

    .header {
        height: 80px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        background: white;
        box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 8px;
        border-bottom: 1px solid #e2e2e2;

        &_left-area,
        &_right-area {
            display: flex;
            height: 100%;
        }

        &_logo {
            background-image: url("#{$header_url}logo.png");
            width: 130px;
            height: 100%;
            background-size: 100%;
            background-repeat: no-repeat;
            background-position: center;
        }

        &_nav {
            display: flex;
            box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgb(209, 213, 219) 0px 0px 0px 1px inset;
            margin: 0 13px;
            height: 100%;

            >li {
                height: 100%;
            }

        }

        .feed {
            @include nav_bg("feed.png");

            &.router-link-active {
                border-bottom: #0275B1 2px solid;
            }
        }

        .network {
            @include nav_bg("network.png");

            &.router-link-active {
                border-bottom: #0275B1 2px solid;

            }
        }

        .jobs {
            @include nav_bg("jobs.png");

            &.router-link-active {
                border-bottom: #0275B1 2px solid;

            }
        }

        .chats {
            @include nav_bg("chats.png");

            &.router-link-active {
                border-bottom: #0275B1 2px solid;

            }
        }

        .notices {
            @include nav_bg("notices.png");

            &.router-link-active {
                border-bottom: #0275B1 2px solid;

            }
        }

        .other {
            @include nav_bg("other.png");
        }

        &_search {
            display: flex;
            align-items: center;
        }

        &_right-btn {
            margin-right: 50px;
            box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgb(209, 213, 219) 0px 0px 0px 1px inset;
        }

        &_profile {
            display: flex;
            align-items: center;

            img {
                width: 80px;
                height: 90%;
                border-radius: 50%;
                margin-right: 20px;
            }
        }

        &_list-infor {
            display: flex;
            flex-direction: column;
            margin-right: 100px;

            &-name {
                margin-bottom: 5px;
            }

            &-time {
                color: #747474;

                i {
                    margin-left: 5px;
                    color: #02B033;
                }
            }
        }
    }
</style>