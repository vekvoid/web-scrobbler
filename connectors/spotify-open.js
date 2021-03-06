'use strict';

/* global Connector, MetadataFilter, Util */

/**
 * The connector for new version of Spotify (open.spotify.com).
 */

Connector.playerSelector = '.now-playing-bar';

Connector.getArtist = function () {
	let artist = $('.track-info__artists a').first();
	return artist.text();
};

Connector.trackSelector = '.track-info__name a';

Connector.trackArtImageSelector = '.now-playing__cover-art .cover-art-image-loaded';

Connector.playButtonSelector = '.control-button[class*="spoticon-play-"]';

Connector.currentTimeSelector = '.playback-bar__progress-time:first-child';

Connector.durationSelector = '.playback-bar__progress-time:last-child';

Connector.filter = MetadataFilter.getRemasteredFilter();
