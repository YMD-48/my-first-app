var _map;

// 地図の初期化
var initMap = function() {
	_map = new google.maps.Map(document.getElementById("map"), {
		zoom : 13,
		center: new google.maps.LatLng(35.692141, 139.759844),
		mayTypeId: google.maps.MapTypeId.ROADMAP
	});
};

// ルート検索実行
var calcRoute = function() {	
	// 経由地の配列を生成
	var wayPoints = new Array();
	wayPoints.push({location: '東京タワー'});
	wayPoints.push({location: 'スカイツリー'});
	wayPoints.push({location: '池袋サンシャインビル'});
	wayPoints.push({location: '東京都庁'});
	wayPoints.push({location: 'お台場'});

	// DirectionsService生成
	var directionsService = new google.maps.DirectionsService();

	// DirectionｓRenderer生成
	var directionsRenderer = new google.maps.DirectionsRenderer();
	directionsRenderer.setPanel(document.getElementById('route-panel'));
	directionsRenderer.setMap(_map);

	// ルート検索実行
	directionsService.route({
		origin: 'マルテープ',  // 出発地
		destination: '六本木ヒルズ',  // 到着地
		avoidHighways: true, // 高速は利用しない
		travelMode: google.maps.TravelMode.DRIVING, // 車モード
		optimizeWaypoints: true, // 最適化を有効
		waypoints: wayPoints // 経由地
	}, function(response, status) {
		console.log(response);
		if (status === google.maps.DirectionsStatus.OK) {
			directionsRenderer.setDirections(response);
			var legs = response.routes[0].legs;
			
			// 総距離と総時間の合計する
			var dis = 0;
			var sec = 0;
			$.each(legs, function(i, val) {
				sec += val.duration.value;
				dis += val.distance.value;
			});
			console.log("distance=" + dis + ", secound=" + sec);
		} else {
			alert('Directions 失敗(' + status + ')');
		}
	});	
};	