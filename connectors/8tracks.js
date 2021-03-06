'use strict';

/* global Connector */

function setupConnector() {
	setupCommonProperties();
	if (isYoutubePlayer()) {
		setupYoutubePlayer();
	} else {
		setup8tracksPlayer();
	}
}

function isYoutubePlayer() {
	return $('body').hasClass('international');
}

function setupYoutubePlayer() {
	Connector.playerSelector = '#main';

	Connector.isPlaying = function() {
		return $('#mix_youtube').hasClass('playing');
	};
}

function setup8tracksPlayer() {
	Connector.playerSelector = '#player';

	Connector.playButtonSelector = '#player_play_button';
}

function setupCommonProperties() {
	Connector.artistSelector = '#now_playing .title_artist .a';

	Connector.trackSelector = '#now_playing .title_artist .t';

	Connector.albumSelector = '#now_playing .album .detail';

	Connector.trackArtImageSelector = '#player_mix img';

	Connector.getUniqueID = function() {
		let trackId = $('.track_details').attr('id');
		if (trackId) {
			return trackId.replace('track_details_', '');
		}

		return null;
	};
}

setupConnector();
