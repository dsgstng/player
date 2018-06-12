class Comment {
    constructor (player) {
        this.player = player;

        this.player.template.mask.addEventListener('click', () => {
            this.hide();
        });
    }

    show () {
        this.player.controller.disableAutoHide = true;
        this.player.template.controller.classList.add('dplayer-controller-comment');
        this.player.template.mask.classList.add('dplayer-mask-show');
        this.player.container.classList.add('dplayer-show-controller');
        this.player.template.commentInput.focus();
    }

    hide () {
        this.player.template.controller.classList.remove('dplayer-controller-comment');
        this.player.template.mask.classList.remove('dplayer-mask-show');
        this.player.container.classList.remove('dplayer-show-controller');
        this.player.controller.disableAutoHide = false;
        this.hideSetting();
    }

    showSetting () {
        this.player.template.commentSettingBox.classList.add('dplayer-comment-setting-open');
    }

    hideSetting () {
        this.player.template.commentSettingBox.classList.remove('dplayer-comment-setting-open');
    }

    toggleSetting () {
        if (this.player.template.commentSettingBox.classList.contains('dplayer-comment-setting-open')) {
            this.hideSetting();
        } else {
            this.showSetting();
        }
    }
}

export default Comment;