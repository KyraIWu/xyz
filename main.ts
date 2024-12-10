function create_dealer_card (first: boolean, num: number) {
    if (first == false) {
        card_number = card_number_list[randint(0, 12)]
        if (card_number == 11) {
            dealer_card = sprites.create(img`
                ...eeeeeeeeeeeeeeeeeeeee...
                ..e111111111111111111111e..
                .e111eeeeeeeeeeeeeeeee111e.
                e11ee11111111111111111ee11e
                e11e1111111111111111111e11e
                e1e11e111111111111111111e1e
                e1e1e1e11111111111111111e1e
                e1e1eee11111111111111111e1e
                e1e1e1e11111111111111111e1e
                e1e111111111111111111111e1e
                e1e111111111111111111111e1e
                e1e111111111111111111111e1e
                e1e111111111111111111111e1e
                e1e111111111111111111111e1e
                e1e111111111111111111111e1e
                e1e111111111111111111111e1e
                e1e11111111e111e11111111e1e
                e1e1111111eee1eee1111111e1e
                e1e111111eeeeeeeee111111e1e
                e1e111111eeeeeeeee111111e1e
                e1e111111eeeeeeeee111111e1e
                e1e1111111eeeeeee1111111e1e
                e1e11111111eeeee11111111e1e
                e1e111111111eee111111111e1e
                e1e1111111111e1111111111e1e
                e1e111111111111111111111e1e
                e1e111111111111111111111e1e
                e1e111111111111111111111e1e
                e1e111111111111111111111e1e
                e1e111111111111111111111e1e
                e1e111111111111111111111e1e
                e1e11111111111111111e1e1e1e
                e1e11111111111111111eee1e1e
                e1e11111111111111111e1e1e1e
                e1e111111111111111111e11e1e
                e11e1111111111111111111e11e
                e11ee11111111111111111ee11e
                .e111eeeeeeeeeeeeeeeee111e.
                ..e111111111111111111111e..
                ...eeeeeeeeeeeeeeeeeeeee...
                `, SpriteKind.Player)
            dealer_ace += 1
        } else if (card_number == 2) {
            dealer_card = sprites.create(img`
                ...eeeeeeeeeeeeeeeeeeeee...
                ..e111111111111111111111e..
                .e111eeeeeeeeeeeeeeeee111e.
                e11ee11111111111111111ee11e
                e11e1111111111111111111e11e
                e1e11ee11111111111111111e1e
                e1e1e11e1111111111111111e1e
                e1e111e11111111111111111e1e
                e1e11e111111111111111111e1e
                e1e1eeee111ee1ee11111111e1e
                e1e1111111eeeeeee1111111e1e
                e1e1111111eeeeeee1111111e1e
                e1e11111111eeeee11111111e1e
                e1e111111111eee111111111e1e
                e1e1111111111e1111111111e1e
                e1e111111111111111111111e1e
                e1e111111111111111111111e1e
                e1e111111111111111111111e1e
                e1e111111111111111111111e1e
                e1e111111111111111111111e1e
                e1e111111111111111111111e1e
                e1e111111111111111111111e1e
                e1e111111111111111111111e1e
                e1e111111111111111111111e1e
                e1e111111111111111111111e1e
                e1e1111111111e1111111111e1e
                e1e111111111eee111111111e1e
                e1e11111111eeeee11111111e1e
                e1e1111111eeeeeee1111111e1e
                e1e1111111eeeeeee1111111e1e
                e1e11111111ee1ee111eeee1e1e
                e1e111111111111111111e11e1e
                e1e11111111111111111e111e1e
                e1e1111111111111111e11e1e1e
                e1e11111111111111111ee11e1e
                e11e1111111111111111111e11e
                e11ee11111111111111111ee11e
                .e111eeeeeeeeeeeeeeeee111e.
                ..e111111111111111111111e..
                ...eeeeeeeeeeeeeeeeeeeee...
                `, SpriteKind.Player)
        } else if (card_number == 3) {
            dealer_card = sprites.create(img`
                ...eeeeeeeeeeeeeeeeeeeee...
                ..e111111111111111111111e..
                .e111eeeeeeeeeeeeeeeee111e.
                e11ee11111111111111111ee11e
                e11e1111111111111111111e11e
                e1e11ee11111111111111111e1e
                e1e1e11e1111111111111111e1e
                e1e111e11111111111111111e1e
                e1e1e11e111ee1ee11111111e1e
                e1e11ee111eeeeeee1111111e1e
                e1e1111111eeeeeee1111111e1e
                e1e11111111eeeee11111111e1e
                e1e111111111eee111111111e1e
                e1e1111111111e1111111111e1e
                e1e111111111111111111111e1e
                e1e111111111111111111111e1e
                e1e111111111111111111111e1e
                e1e11111111ee1ee11111111e1e
                e1e1111111eeeeeee1111111e1e
                e1e1111111eeeeeee1111111e1e
                e1e11111111eeeee11111111e1e
                e1e111111111eee111111111e1e
                e1e1111111111e1111111111e1e
                e1e111111111111111111111e1e
                e1e111111111111111111111e1e
                e1e111111111111111111111e1e
                e1e1111111111e1111111111e1e
                e1e111111111eee111111111e1e
                e1e11111111eeeee11111111e1e
                e1e1111111eeeeeee1111111e1e
                e1e1111111eeeeeee111ee11e1e
                e1e11111111ee1ee111e11e1e1e
                e1e11111111111111111e111e1e
                e1e1111111111111111e11e1e1e
                e1e11111111111111111ee11e1e
                e11e1111111111111111111e11e
                e11ee11111111111111111ee11e
                .e111eeeeeeeeeeeeeeeee111e.
                ..e111111111111111111111e..
                ...eeeeeeeeeeeeeeeeeeeee...
                `, SpriteKind.Player)
        } else if (card_number == 4) {
            dealer_card = sprites.create(img`
                ...eeeeeeeeeeeeeeeeeeeee...
                ..e111111111111111111111e..
                .e111eeeeeeeeeeeeeeeee111e.
                e11ee11111111111111111ee11e
                e11e1111111111111111111e11e
                e1e111111111111111111111e1e
                e1e1e1111111111111111111e1e
                e1e1e1e11111111111111111e1e
                e1e1eee11111111111111111e1e
                e1e111e11111111111111111e1e
                e1e111111111111111111111e1e
                e1e111ee1ee11111ee1ee111e1e
                e1e11eeeeeee111eeeeeee11e1e
                e1e11eeeeeee111eeeeeee11e1e
                e1e111eeeee11111eeeee111e1e
                e1e1111eee1111111eee1111e1e
                e1e11111e111111111e11111e1e
                e1e111111111111111111111e1e
                e1e111111111111111111111e1e
                e1e111111111111111111111e1e
                e1e111111111111111111111e1e
                e1e111111111111111111111e1e
                e1e111111111111111111111e1e
                e1e11111e111111111e11111e1e
                e1e1111eee1111111eee1111e1e
                e1e111eeeee11111eeeee111e1e
                e1e11eeeeeee111eeeeeee11e1e
                e1e11eeeeeee111eeeeeee11e1e
                e1e111ee1ee11111ee1ee111e1e
                e1e111111111111111111111e1e
                e1e11111111111111111e111e1e
                e1e11111111111111111eee1e1e
                e1e11111111111111111e1e1e1e
                e1e1111111111111111111e1e1e
                e1e111111111111111111111e1e
                e11e1111111111111111111e11e
                e11ee11111111111111111ee11e
                .e111eeeeeeeeeeeeeeeee111e.
                ..e111111111111111111111e..
                ...eeeeeeeeeeeeeeeeeeeee...
                `, SpriteKind.Player)
        } else if (card_number == 5) {
            dealer_card = sprites.create(img`
                ...eeeeeeeeeeeeeeeeeeeee...
                ..e111111111111111111111e..
                .e111eeeeeeeeeeeeeeeee111e.
                e11ee11111111111111111ee11e
                e11e1111111111111111111e11e
                e1e11eee1111111111111111e1e
                e1e11e111111111111111111e1e
                e1e11ee11111111111111111e1e
                e1e1111e1111111111111111e1e
                e1e11ee11111111111111111e1e
                e1e111111111111111111111e1e
                e1e111ee1ee11111ee1ee111e1e
                e1e11eeeeeee111eeeeeee11e1e
                e1e11eeeeeee111eeeeeee11e1e
                e1e111eeeee11111eeeee111e1e
                e1e1111eee1111111eee1111e1e
                e1e11111e111111111e11111e1e
                e1e11111111ee1ee11111111e1e
                e1e1111111eeeeeee1111111e1e
                e1e1111111eeeeeee1111111e1e
                e1e11111111eeeee11111111e1e
                e1e111111111eee111111111e1e
                e1e1111111111e1111111111e1e
                e1e11111e111111111e11111e1e
                e1e1111eee1111111eee1111e1e
                e1e111eeeee11111eeeee111e1e
                e1e11eeeeeee111eeeeeee11e1e
                e1e11eeeeeee111eeeeeee11e1e
                e1e111ee1ee11111ee1ee111e1e
                e1e111111111111111111111e1e
                e1e11111111111111111ee11e1e
                e1e1111111111111111e1111e1e
                e1e11111111111111111ee11e1e
                e1e111111111111111111e11e1e
                e1e1111111111111111eee11e1e
                e11e1111111111111111111e11e
                e11ee11111111111111111ee11e
                .e111eeeeeeeeeeeeeeeee111e.
                ..e111111111111111111111e..
                ...eeeeeeeeeeeeeeeeeeeee...
                `, SpriteKind.Player)
        } else if (card_number == 6) {
            dealer_card = sprites.create(img`
                ...eeeeeeeeeeeeeeeeeeeee...
                ..e111111111111111111111e..
                .e111eeeeeeeeeeeeeeeee111e.
                e11ee11111111111111111ee11e
                e11e11ee111111111111111e11e
                e1e11e111111111111111111e1e
                e1e11eee11111111ee1ee111e1e
                e1e11e1e1111111eeeeeee11e1e
                e1e11ee11111111eeeeeee11e1e
                e1e1111111111111eeeee111e1e
                e1e11111111111111eee1111e1e
                e1e111111111111111e11111e1e
                e1e111ee1ee1111111111111e1e
                e1e11eeeeeee111111111111e1e
                e1e11eeeeeee1111ee1ee111e1e
                e1e111eeeee1111eeeeeee11e1e
                e1e1111eee11111eeeeeee11e1e
                e1e11111e1111111eeeee111e1e
                e1e11111111111111eee1111e1e
                e1e111111111111111e11111e1e
                e1e111ee1ee1111111111111e1e
                e1e11eeeeeee111111111111e1e
                e1e11eeeeeee111111e11111e1e
                e1e111eeeee111111eee1111e1e
                e1e1111eee111111eeeee111e1e
                e1e11111e111111eeeeeee11e1e
                e1e111111111111eeeeeee11e1e
                e1e1111111111111ee1ee111e1e
                e1e11111e111111111111111e1e
                e1e1111eee11111111111111e1e
                e1e111eeeee1111111111111e1e
                e1e11eeeeeee11111111ee11e1e
                e1e11eeeeeee1111111e1e11e1e
                e1e111ee1ee11111111eee11e1e
                e1e111111111111111111e11e1e
                e11e111111111111111ee11e11e
                e11ee11111111111111111ee11e
                .e111eeeeeeeeeeeeeeeee111e.
                ..e111111111111111111111e..
                ...eeeeeeeeeeeeeeeeeeeee...
                `, SpriteKind.Player)
        } else if (card_number == 7) {
            dealer_card = sprites.create(img`
                ...eeeeeeeeeeeeeeeeeeeee...
                ..e111111111111111111111e..
                .e111eeeeeeeeeeeeeeeee111e.
                e11ee11111111111111111ee11e
                e11e1111111111111111111e11e
                e1e11eee1111111111111111e1e
                e1e1111e1111111111111111e1e
                e1e111e11111111111111111e1e
                e1e11e111111111111111111e1e
                e1e111111111111111111111e1e
                e1e111111111111111111111e1e
                e1e11111e1e11111e1e11111e1e
                e1e1111eeeee111eeeee1111e1e
                e1e11111eee11111eee11111e1e
                e1e111111e1111111e111111e1e
                e1e111111111e1e111111111e1e
                e1e11111111eeeee11111111e1e
                e1e111111111eee111111111e1e
                e1e1111111111e1111111111e1e
                e1e11111e1e11111e1e11111e1e
                e1e1111eeeee111eeeee1111e1e
                e1e11111eee11111eee11111e1e
                e1e111111e1111111e111111e1e
                e1e111111111111111111111e1e
                e1e111111111111111111111e1e
                e1e111111111111111111111e1e
                e1e111111e1111111e111111e1e
                e1e11111eee11111eee11111e1e
                e1e1111eeeee111eeeee1111e1e
                e1e11111e1e11111e1e11111e1e
                e1e111111111111111111111e1e
                e1e111111111111111111e11e1e
                e1e11111111111111111e111e1e
                e1e1111111111111111e1111e1e
                e1e1111111111111111eee11e1e
                e11e1111111111111111111e11e
                e11ee11111111111111111ee11e
                .e111eeeeeeeeeeeeeeeee111e.
                ..e111111111111111111111e..
                ...eeeeeeeeeeeeeeeeeeeee...
                `, SpriteKind.Player)
        } else if (card_number == 8) {
            dealer_card = sprites.create(img`
                ...eeeeeeeeeeeeeeeeeeeee...
                ..e111111111111111111111e..
                .e111eeeeeeeeeeeeeeeee111e.
                e11ee11111111111111111ee11e
                e11e1111111111111111111e11e
                e1e11e111111111111111111e1e
                e1e1e1e11111111111111111e1e
                e1e11e111111111111111111e1e
                e1e1e1e11111111111111111e1e
                e1e11e111111111111111111e1e
                e1e11111e1e11111e1e11111e1e
                e1e1111eeeee111eeeee1111e1e
                e1e11111eee11111eee11111e1e
                e1e111111e1111111e111111e1e
                e1e111111111e1e111111111e1e
                e1e11111111eeeee11111111e1e
                e1e111111111eee111111111e1e
                e1e1111111111e1111111111e1e
                e1e11111e1e11111e1e11111e1e
                e1e1111eeeee111eeeee1111e1e
                e1e11111eee11111eee11111e1e
                e1e111111e111e111e111111e1e
                e1e111111111eee111111111e1e
                e1e11111111eeeee11111111e1e
                e1e111111111e1e111111111e1e
                e1e111111e1111111e111111e1e
                e1e11111eee11111eee11111e1e
                e1e1111eeeee111eeeee1111e1e
                e1e11111e1e11111e1e11111e1e
                e1e111111111111111111111e1e
                e1e111111111111111111e11e1e
                e1e11111111111111111e1e1e1e
                e1e111111111111111111e11e1e
                e1e11111111111111111e1e1e1e
                e1e111111111111111111e11e1e
                e11e1111111111111111111e11e
                e11ee11111111111111111ee11e
                .e111eeeeeeeeeeeeeeeee111e.
                ..e111111111111111111111e..
                ...eeeeeeeeeeeeeeeeeeeee...
                `, SpriteKind.Player)
        } else if (card_number == 9) {
            dealer_card = sprites.create(img`
                ...eeeeeeeeeeeeeeeeeeeee...
                ..e111111111111111111111e..
                .e111eeeeeeeeeeeeeeeee111e.
                e11ee11111111111111111ee11e
                e11e1eee111111111111111e11e
                e1e11e1e1111111111111111e1e
                e1e11eee1111111111111111e1e
                e1e1111e1111111111111111e1e
                e1e11ee11111111111111111e1e
                e1e11111e1e11111e1e11111e1e
                e1e1111eeeee111eeeee1111e1e
                e1e11111eee11111eee11111e1e
                e1e111111e1111111e111111e1e
                e1e111111111111111111111e1e
                e1e111111111111111111111e1e
                e1e11111e1e11111e1e11111e1e
                e1e1111eeeee111eeeee1111e1e
                e1e11111eee11111eee11111e1e
                e1e111111e11e1e11e111111e1e
                e1e11111111eeeee11111111e1e
                e1e111111111eee111111111e1e
                e1e111111e111e111e111111e1e
                e1e11111eee11111eee11111e1e
                e1e1111eeeee111eeeee1111e1e
                e1e11111e1e11111e1e11111e1e
                e1e111111111111111111111e1e
                e1e111111111111111111111e1e
                e1e111111e1111111e111111e1e
                e1e11111eee11111eee11111e1e
                e1e1111eeeee111eeeee1111e1e
                e1e11111e1e11111e1e11111e1e
                e1e11111111111111111ee11e1e
                e1e1111111111111111e1111e1e
                e1e1111111111111111eee11e1e
                e1e1111111111111111e1e11e1e
                e11e111111111111111eee1e11e
                e11ee11111111111111111ee11e
                .e111eeeeeeeeeeeeeeeee111e.
                ..e111111111111111111111e..
                ...eeeeeeeeeeeeeeeeeeeee...
                `, SpriteKind.Player)
        } else if (card_number == 10) {
            _10_j_q_k = randint(0, 3)
            if (_10_j_q_k == 0) {
                dealer_card = sprites.create(img`
                    ...eeeeeeeeeeeeeeeeeeeee...
                    ..e111111111111111111111e..
                    .e111eeeeeeeeeeeeeeeee111e.
                    e11ee11111111111111111ee11e
                    e11e1111111111111111111e11e
                    e1e11e1eee11111111111111e1e
                    e1e11e1e1e11111111111111e1e
                    e1e11e1eee11111111111111e1e
                    e1e111111111111111111111e1e
                    e1e11111e1e11111e1e11111e1e
                    e1e1111eeeee111eeeee1111e1e
                    e1e11111eee11111eee11111e1e
                    e1e111111e11e1e11e111111e1e
                    e1e11111111eeeee11111111e1e
                    e1e111111111eee111111111e1e
                    e1e11111e1e11e11e1e11111e1e
                    e1e1111eeeee111eeeee1111e1e
                    e1e11111eee11111eee11111e1e
                    e1e111111e1111111e111111e1e
                    e1e111111111111111111111e1e
                    e1e111111111111111111111e1e
                    e1e111111e1111111e111111e1e
                    e1e11111eee11111eee11111e1e
                    e1e1111eeeee111eeeee1111e1e
                    e1e11111e1e11e11e1e11111e1e
                    e1e111111111eee111111111e1e
                    e1e11111111eeeee11111111e1e
                    e1e111111e11e1e11e111111e1e
                    e1e11111eee11111eee11111e1e
                    e1e1111eeeee111eeeee1111e1e
                    e1e11111e1e11111e1e11111e1e
                    e1e111111111111111111111e1e
                    e1e11111111111111eee1e11e1e
                    e1e11111111111111e1e1e11e1e
                    e1e11111111111111eee1e11e1e
                    e11e1111111111111111111e11e
                    e11ee11111111111111111ee11e
                    .e111eeeeeeeeeeeeeeeee111e.
                    ..e111111111111111111111e..
                    ...eeeeeeeeeeeeeeeeeeeee...
                    `, SpriteKind.Player)
            } else if (_10_j_q_k == 1) {
                dealer_card = sprites.create(img`
                    ...eeeeeeeeeeeeeeeeeeeee...
                    ..e111111111111111111111e..
                    .e111eeeeeeeeeeeeeeeee111e.
                    e11ee11111111111111111ee11e
                    e11e1111111111111111111e11e
                    e1e11ee11111111111e1e111e1e
                    e1e111e1111111111eeeee11e1e
                    e1e1e1e11111111111eee111e1e
                    e1e11e1111111111111e1111e1e
                    e1e111111111111111111111e1e
                    e1e111eeee11111111111111e1e
                    e1e111e311e1111111111111e1e
                    e1e111ed33e1111111111111e1e
                    e1e111ed331e111111111111e1e
                    e1e111edd33e111111111111e1e
                    e1e1111edd31e11111111111e1e
                    e1e1111edd33e11111111111e1e
                    e1e11111edd31e1111111111e1e
                    e1e11111eddd3e1111111111e1e
                    e1e111111edd33e111111111e1e
                    e1e111111eddd3e111111111e1e
                    e1e1111111edd33e11ee1111e1e
                    e1e1111111eddd33ee35e111e1e
                    e1e11111111edd33e35e1111e1e
                    e1e11111111eddde35e11111e1e
                    e1e111111111ede95e111111e1e
                    e1e1111111111e54bbe11111e1e
                    e1e111111111e54cbbe11111e1e
                    e1e11111111e44eccbbe1111e1e
                    e1e111111111ee1eccbe1111e1e
                    e1e111111111111eccce1111e1e
                    e1e1111e11111111eee11e11e1e
                    e1e111eee11111111111e1e1e1e
                    e1e11eeeee1111111111e111e1e
                    e1e111e1e11111111111ee11e1e
                    e11e1111111111111111111e11e
                    e11ee11111111111111111ee11e
                    .e111eeeeeeeeeeeeeeeee111e.
                    ..e111111111111111111111e..
                    ...eeeeeeeeeeeeeeeeeeeee...
                    `, SpriteKind.Player)
            } else if (_10_j_q_k == 2) {
                dealer_card = sprites.create(img`
                    ...eeeeeeeeeeeeeeeeeeeee...
                    ..e111111111111111111111e..
                    .e111eeeeeeeeeeeeeeeee111e.
                    e11ee11111111111111111ee11e
                    e11e1111111111111111111e11e
                    e1e11ee11111111111e1e111e1e
                    e1e1e11e111111111eeeee11e1e
                    e1e1e11e1111111111eee111e1e
                    e1e11ee111111111111e1111e1e
                    e1e1111e1111111111111111e1e
                    e1e111111111111111111111e1e
                    e1e111111111111111111111e1e
                    e1e111111111111111111111e1e
                    e1e1111111111e1111111111e1e
                    e1e1111111111e1111111111e1e
                    e1e111111111e9e111111111e1e
                    e1e111111111e3e111111111e1e
                    e1e11ee1111e355e1111ee11e1e
                    e1e11e9e111e345e111e9e11e1e
                    e1e111e5e1e35555e1e5e111e1e
                    e1e111e5e1e55555e1e5e111e1e
                    e1e111e45e3554555e54e111e1e
                    e1e1111e555543e5554e1111e1e
                    e1e1111e4555e945554e1111e1e
                    e1e11111e4555e5554e11111e1e
                    e1e11111e433353554e11111e1e
                    e1e11111eeeeeeeeeee11111e1e
                    e1e111111111111111111111e1e
                    e1e111111111111111111111e1e
                    e1e111111111111111111111e1e
                    e1e1111111111111111e1111e1e
                    e1e1111e111111111111ee11e1e
                    e1e111eee1111111111e11e1e1e
                    e1e11eeeee111111111e11e1e1e
                    e1e111e1e11111111111ee11e1e
                    e11e1111111111111111111e11e
                    e11ee11111111111111111ee11e
                    .e111eeeeeeeeeeeeeeeee111e.
                    ..e111111111111111111111e..
                    ...eeeeeeeeeeeeeeeeeeeee...
                    `, SpriteKind.Player)
            } else if (_10_j_q_k == 3) {
                dealer_card = sprites.create(img`
                    ...eeeeeeeeeeeeeeeeeeeee...
                    ..e111111111111111111111e..
                    .e111eeeeeeeeeeeeeeeee111e.
                    e11ee11111111111111111ee11e
                    e11e1111111111111111111e11e
                    e1e11e1e1111111111e1e111e1e
                    e1e11ee1111111111eeeee11e1e
                    e1e11e1e1111111111eee111e1e
                    e1e11e1e11111111111e1111e1e
                    e1e111111111111111111111e1e
                    e1e111111111111111111111e1e
                    e1e111111111111111111111e1e
                    e1e1111111111e1111111111e1e
                    e1e111111111e9e111111111e1e
                    e1e1111111111e1111111111e1e
                    e1e111111111e3e111111111e1e
                    e1e111e1111e355e1111e111e1e
                    e1e11e3e111e355e111e3e11e1e
                    e1e11e35e1e35554e1e35e11e1e
                    e1e11e555e5553544e355e11e1e
                    e1e11e495e5549e54e594e11e1e
                    e1e11e4454e5e945e4444e11e1e
                    e1e111e455455e554444e111e1e
                    e1e111e4455555555544e111e1e
                    e1e1111eeeeeeeeee3ee1111e1e
                    e1e1111e44444555555e1111e1e
                    e1e1111eeeeeeeeeeeee1111e1e
                    e1e111111111111111111111e1e
                    e1e111111111111111111111e1e
                    e1e111111111111111111111e1e
                    e1e111111111111111111111e1e
                    e1e1111e11111111111e1e11e1e
                    e1e111eee1111111111e1e11e1e
                    e1e11eeeee1111111111ee11e1e
                    e1e111e1e1111111111e1e11e1e
                    e11e1111111111111111111e11e
                    e11ee11111111111111111ee11e
                    .e111eeeeeeeeeeeeeeeee111e.
                    ..e111111111111111111111e..
                    ...eeeeeeeeeeeeeeeeeeeee...
                    `, SpriteKind.Player)
            }
        }
        dealer_card.setPosition(180, 27)
        dealer_card.setVelocity(-2000 + 20 * num, 0)
        pause(200)
        dealer_card.setVelocity(0, 0)
        dealer_card.setPosition(80 + 20 * num, 27)
        pause(100)
    } else {
        card_number = card_number_list[randint(0, 12)]
        hidden_dealer_card = sprites.create(img`
            ...eeeeeeeeeeeeeeeeeeeee...
            ..e1e1e1e1e1e1e1e1e1e1e1e..
            .e1e1eeeeeeeeeeeeeeeee1e1e.
            e1eeecb1111111111111bceee1e
            ee1e1ecb1ebd111dbe1bce1e1ee
            e1e111ecb1ebd1dbe1bce111e1e
            eee1e11ecb1ebdbe1bce11e1eee
            e1e1ce11ecb1ebe1bce11ec1e1e
            eee1bce11ecb1e1bce11ecb1eee
            e1e1dbce11ecb1bce11ecbd1e1e
            eee11111111ecbce11111111eee
            e1e111eee111ece111eee111e1e
            eee11eddde11ded11eddde11eee
            e1e11ed1de11ded11ed1de11e1e
            eee111e1de11ded11ed1e111eee
            e1e11bddde1deeed1edddb11e1e
            eee1beeee11deced11eeeeb1eee
            e1e1ee111ddeebeedd111ee1e1e
            eee1e11ddeeeedeeeedd11e1eee
            e1e1e1deeecbdddbceeed1e1e1e
            e1e1e1deeecbdddbceeed1e1e1e
            eee1e11ddeeeedeeeedd11e1eee
            e1e1ee111ddeebeedd111ee1e1e
            eee1beeee11deced11eeeeb1eee
            e1e11bddde1deeed1edddb11e1e
            eee111e1de11ded11ed1e111eee
            e1e11ed1de11ded11ed1de11e1e
            eee11eddde11ded11eddde11eee
            e1e111eee111ece111eee111e1e
            eee11111111ecbce11111111eee
            e1e1dbce11ecb1bce11ecbd1e1e
            eee1bce11ecb1e1bce11ecb1eee
            e1e1ce11ecb1ebe1bce11ec1e1e
            eee1e11ecb1ebdbe1bce11e1eee
            e1e111ecb1ebd1dbe1bce111e1e
            ee1e1ecb1ebd111dbe1bce1e1ee
            e1eeecb1111111111111bceee1e
            .e1e1eeeeeeeeeeeeeeeee1e1e.
            ..e1e1e1e1e1e1e1e1e1e1e1e..
            ...eeeeeeeeeeeeeeeeeeeee...
            `, SpriteKind.Player)
        if (first) {
            hidden_dealer_card.setPosition(180, 27)
            hidden_dealer_card.setVelocity(-2000, 0)
            pause(200)
            hidden_dealer_card.setVelocity(0, 0)
            hidden_dealer_card.setPosition(80, 27)
        }
    }
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    start_game()
})
function draw_cards () {
    while (game.ask("Draw Card?")) {
        create_card(2 + draws)
        player_sum += card_number
        draws += 1
        while (player_ace > 0 && player_sum > 21) {
            player_sum += 0 - 10
            player_ace += -1
        }
        if (player_sum > 21) {
            game.splash("BUST!")
            game.gameOver(false)
        } else if (player_sum == 21) {
            break;
        }
        pause(100)
    }
}
function create_card (num2: number) {
    card_number = card_number_list[randint(0, 12)]
    if (card_number == 11) {
        player_card = sprites.create(img`
            ...eeeeeeeeeeeeeeeeeeeee...
            ..e111111111111111111111e..
            .e111eeeeeeeeeeeeeeeee111e.
            e11ee11111111111111111ee11e
            e11e1111111111111111111e11e
            e1e11e111111111111111111e1e
            e1e1e1e11111111111111111e1e
            e1e1eee11111111111111111e1e
            e1e1e1e11111111111111111e1e
            e1e111111111111111111111e1e
            e1e111111111111111111111e1e
            e1e111111111111111111111e1e
            e1e111111111111111111111e1e
            e1e111111111111111111111e1e
            e1e111111111111111111111e1e
            e1e111111111111111111111e1e
            e1e11111111e111e11111111e1e
            e1e1111111eee1eee1111111e1e
            e1e111111eeeeeeeee111111e1e
            e1e111111eeeeeeeee111111e1e
            e1e111111eeeeeeeee111111e1e
            e1e1111111eeeeeee1111111e1e
            e1e11111111eeeee11111111e1e
            e1e111111111eee111111111e1e
            e1e1111111111e1111111111e1e
            e1e111111111111111111111e1e
            e1e111111111111111111111e1e
            e1e111111111111111111111e1e
            e1e111111111111111111111e1e
            e1e111111111111111111111e1e
            e1e111111111111111111111e1e
            e1e11111111111111111e1e1e1e
            e1e11111111111111111eee1e1e
            e1e11111111111111111e1e1e1e
            e1e111111111111111111e11e1e
            e11e1111111111111111111e11e
            e11ee11111111111111111ee11e
            .e111eeeeeeeeeeeeeeeee111e.
            ..e111111111111111111111e..
            ...eeeeeeeeeeeeeeeeeeeee...
            `, SpriteKind.Player)
        player_ace += 1
    } else if (card_number == 2) {
        player_card = sprites.create(img`
            ...eeeeeeeeeeeeeeeeeeeee...
            ..e111111111111111111111e..
            .e111eeeeeeeeeeeeeeeee111e.
            e11ee11111111111111111ee11e
            e11e1111111111111111111e11e
            e1e11ee11111111111111111e1e
            e1e1e11e1111111111111111e1e
            e1e111e11111111111111111e1e
            e1e11e111111111111111111e1e
            e1e1eeee111ee1ee11111111e1e
            e1e1111111eeeeeee1111111e1e
            e1e1111111eeeeeee1111111e1e
            e1e11111111eeeee11111111e1e
            e1e111111111eee111111111e1e
            e1e1111111111e1111111111e1e
            e1e111111111111111111111e1e
            e1e111111111111111111111e1e
            e1e111111111111111111111e1e
            e1e111111111111111111111e1e
            e1e111111111111111111111e1e
            e1e111111111111111111111e1e
            e1e111111111111111111111e1e
            e1e111111111111111111111e1e
            e1e111111111111111111111e1e
            e1e111111111111111111111e1e
            e1e1111111111e1111111111e1e
            e1e111111111eee111111111e1e
            e1e11111111eeeee11111111e1e
            e1e1111111eeeeeee1111111e1e
            e1e1111111eeeeeee1111111e1e
            e1e11111111ee1ee111eeee1e1e
            e1e111111111111111111e11e1e
            e1e11111111111111111e111e1e
            e1e1111111111111111e11e1e1e
            e1e11111111111111111ee11e1e
            e11e1111111111111111111e11e
            e11ee11111111111111111ee11e
            .e111eeeeeeeeeeeeeeeee111e.
            ..e111111111111111111111e..
            ...eeeeeeeeeeeeeeeeeeeee...
            `, SpriteKind.Player)
    } else if (card_number == 3) {
        player_card = sprites.create(img`
            ...eeeeeeeeeeeeeeeeeeeee...
            ..e111111111111111111111e..
            .e111eeeeeeeeeeeeeeeee111e.
            e11ee11111111111111111ee11e
            e11e1111111111111111111e11e
            e1e11ee11111111111111111e1e
            e1e1e11e1111111111111111e1e
            e1e111e11111111111111111e1e
            e1e1e11e111ee1ee11111111e1e
            e1e11ee111eeeeeee1111111e1e
            e1e1111111eeeeeee1111111e1e
            e1e11111111eeeee11111111e1e
            e1e111111111eee111111111e1e
            e1e1111111111e1111111111e1e
            e1e111111111111111111111e1e
            e1e111111111111111111111e1e
            e1e111111111111111111111e1e
            e1e11111111ee1ee11111111e1e
            e1e1111111eeeeeee1111111e1e
            e1e1111111eeeeeee1111111e1e
            e1e11111111eeeee11111111e1e
            e1e111111111eee111111111e1e
            e1e1111111111e1111111111e1e
            e1e111111111111111111111e1e
            e1e111111111111111111111e1e
            e1e111111111111111111111e1e
            e1e1111111111e1111111111e1e
            e1e111111111eee111111111e1e
            e1e11111111eeeee11111111e1e
            e1e1111111eeeeeee1111111e1e
            e1e1111111eeeeeee111ee11e1e
            e1e11111111ee1ee111e11e1e1e
            e1e11111111111111111e111e1e
            e1e1111111111111111e11e1e1e
            e1e11111111111111111ee11e1e
            e11e1111111111111111111e11e
            e11ee11111111111111111ee11e
            .e111eeeeeeeeeeeeeeeee111e.
            ..e111111111111111111111e..
            ...eeeeeeeeeeeeeeeeeeeee...
            `, SpriteKind.Player)
    } else if (card_number == 4) {
        player_card = sprites.create(img`
            ...eeeeeeeeeeeeeeeeeeeee...
            ..e111111111111111111111e..
            .e111eeeeeeeeeeeeeeeee111e.
            e11ee11111111111111111ee11e
            e11e1111111111111111111e11e
            e1e111111111111111111111e1e
            e1e1e1111111111111111111e1e
            e1e1e1e11111111111111111e1e
            e1e1eee11111111111111111e1e
            e1e111e11111111111111111e1e
            e1e111111111111111111111e1e
            e1e111ee1ee11111ee1ee111e1e
            e1e11eeeeeee111eeeeeee11e1e
            e1e11eeeeeee111eeeeeee11e1e
            e1e111eeeee11111eeeee111e1e
            e1e1111eee1111111eee1111e1e
            e1e11111e111111111e11111e1e
            e1e111111111111111111111e1e
            e1e111111111111111111111e1e
            e1e111111111111111111111e1e
            e1e111111111111111111111e1e
            e1e111111111111111111111e1e
            e1e111111111111111111111e1e
            e1e11111e111111111e11111e1e
            e1e1111eee1111111eee1111e1e
            e1e111eeeee11111eeeee111e1e
            e1e11eeeeeee111eeeeeee11e1e
            e1e11eeeeeee111eeeeeee11e1e
            e1e111ee1ee11111ee1ee111e1e
            e1e111111111111111111111e1e
            e1e11111111111111111e111e1e
            e1e11111111111111111eee1e1e
            e1e11111111111111111e1e1e1e
            e1e1111111111111111111e1e1e
            e1e111111111111111111111e1e
            e11e1111111111111111111e11e
            e11ee11111111111111111ee11e
            .e111eeeeeeeeeeeeeeeee111e.
            ..e111111111111111111111e..
            ...eeeeeeeeeeeeeeeeeeeee...
            `, SpriteKind.Player)
    } else if (card_number == 5) {
        player_card = sprites.create(img`
            ...eeeeeeeeeeeeeeeeeeeee...
            ..e111111111111111111111e..
            .e111eeeeeeeeeeeeeeeee111e.
            e11ee11111111111111111ee11e
            e11e1111111111111111111e11e
            e1e11eee1111111111111111e1e
            e1e11e111111111111111111e1e
            e1e11ee11111111111111111e1e
            e1e1111e1111111111111111e1e
            e1e11ee11111111111111111e1e
            e1e111111111111111111111e1e
            e1e111ee1ee11111ee1ee111e1e
            e1e11eeeeeee111eeeeeee11e1e
            e1e11eeeeeee111eeeeeee11e1e
            e1e111eeeee11111eeeee111e1e
            e1e1111eee1111111eee1111e1e
            e1e11111e111111111e11111e1e
            e1e11111111ee1ee11111111e1e
            e1e1111111eeeeeee1111111e1e
            e1e1111111eeeeeee1111111e1e
            e1e11111111eeeee11111111e1e
            e1e111111111eee111111111e1e
            e1e1111111111e1111111111e1e
            e1e11111e111111111e11111e1e
            e1e1111eee1111111eee1111e1e
            e1e111eeeee11111eeeee111e1e
            e1e11eeeeeee111eeeeeee11e1e
            e1e11eeeeeee111eeeeeee11e1e
            e1e111ee1ee11111ee1ee111e1e
            e1e111111111111111111111e1e
            e1e11111111111111111ee11e1e
            e1e1111111111111111e1111e1e
            e1e11111111111111111ee11e1e
            e1e111111111111111111e11e1e
            e1e1111111111111111eee11e1e
            e11e1111111111111111111e11e
            e11ee11111111111111111ee11e
            .e111eeeeeeeeeeeeeeeee111e.
            ..e111111111111111111111e..
            ...eeeeeeeeeeeeeeeeeeeee...
            `, SpriteKind.Player)
    } else if (card_number == 6) {
        player_card = sprites.create(img`
            ...eeeeeeeeeeeeeeeeeeeee...
            ..e111111111111111111111e..
            .e111eeeeeeeeeeeeeeeee111e.
            e11ee11111111111111111ee11e
            e11e11ee111111111111111e11e
            e1e11e111111111111111111e1e
            e1e11eee11111111ee1ee111e1e
            e1e11e1e1111111eeeeeee11e1e
            e1e11ee11111111eeeeeee11e1e
            e1e1111111111111eeeee111e1e
            e1e11111111111111eee1111e1e
            e1e111111111111111e11111e1e
            e1e111ee1ee1111111111111e1e
            e1e11eeeeeee111111111111e1e
            e1e11eeeeeee1111ee1ee111e1e
            e1e111eeeee1111eeeeeee11e1e
            e1e1111eee11111eeeeeee11e1e
            e1e11111e1111111eeeee111e1e
            e1e11111111111111eee1111e1e
            e1e111111111111111e11111e1e
            e1e111ee1ee1111111111111e1e
            e1e11eeeeeee111111111111e1e
            e1e11eeeeeee111111e11111e1e
            e1e111eeeee111111eee1111e1e
            e1e1111eee111111eeeee111e1e
            e1e11111e111111eeeeeee11e1e
            e1e111111111111eeeeeee11e1e
            e1e1111111111111ee1ee111e1e
            e1e11111e111111111111111e1e
            e1e1111eee11111111111111e1e
            e1e111eeeee1111111111111e1e
            e1e11eeeeeee11111111ee11e1e
            e1e11eeeeeee1111111e1e11e1e
            e1e111ee1ee11111111eee11e1e
            e1e111111111111111111e11e1e
            e11e111111111111111ee11e11e
            e11ee11111111111111111ee11e
            .e111eeeeeeeeeeeeeeeee111e.
            ..e111111111111111111111e..
            ...eeeeeeeeeeeeeeeeeeeee...
            `, SpriteKind.Player)
    } else if (card_number == 7) {
        player_card = sprites.create(img`
            ...eeeeeeeeeeeeeeeeeeeee...
            ..e111111111111111111111e..
            .e111eeeeeeeeeeeeeeeee111e.
            e11ee11111111111111111ee11e
            e11e1111111111111111111e11e
            e1e11eee1111111111111111e1e
            e1e1111e1111111111111111e1e
            e1e111e11111111111111111e1e
            e1e11e111111111111111111e1e
            e1e111111111111111111111e1e
            e1e111111111111111111111e1e
            e1e11111e1e11111e1e11111e1e
            e1e1111eeeee111eeeee1111e1e
            e1e11111eee11111eee11111e1e
            e1e111111e1111111e111111e1e
            e1e111111111e1e111111111e1e
            e1e11111111eeeee11111111e1e
            e1e111111111eee111111111e1e
            e1e1111111111e1111111111e1e
            e1e11111e1e11111e1e11111e1e
            e1e1111eeeee111eeeee1111e1e
            e1e11111eee11111eee11111e1e
            e1e111111e1111111e111111e1e
            e1e111111111111111111111e1e
            e1e111111111111111111111e1e
            e1e111111111111111111111e1e
            e1e111111e1111111e111111e1e
            e1e11111eee11111eee11111e1e
            e1e1111eeeee111eeeee1111e1e
            e1e11111e1e11111e1e11111e1e
            e1e111111111111111111111e1e
            e1e111111111111111111e11e1e
            e1e11111111111111111e111e1e
            e1e1111111111111111e1111e1e
            e1e1111111111111111eee11e1e
            e11e1111111111111111111e11e
            e11ee11111111111111111ee11e
            .e111eeeeeeeeeeeeeeeee111e.
            ..e111111111111111111111e..
            ...eeeeeeeeeeeeeeeeeeeee...
            `, SpriteKind.Player)
    } else if (card_number == 8) {
        player_card = sprites.create(img`
            ...eeeeeeeeeeeeeeeeeeeee...
            ..e111111111111111111111e..
            .e111eeeeeeeeeeeeeeeee111e.
            e11ee11111111111111111ee11e
            e11e1111111111111111111e11e
            e1e11e111111111111111111e1e
            e1e1e1e11111111111111111e1e
            e1e11e111111111111111111e1e
            e1e1e1e11111111111111111e1e
            e1e11e111111111111111111e1e
            e1e11111e1e11111e1e11111e1e
            e1e1111eeeee111eeeee1111e1e
            e1e11111eee11111eee11111e1e
            e1e111111e1111111e111111e1e
            e1e111111111e1e111111111e1e
            e1e11111111eeeee11111111e1e
            e1e111111111eee111111111e1e
            e1e1111111111e1111111111e1e
            e1e11111e1e11111e1e11111e1e
            e1e1111eeeee111eeeee1111e1e
            e1e11111eee11111eee11111e1e
            e1e111111e111e111e111111e1e
            e1e111111111eee111111111e1e
            e1e11111111eeeee11111111e1e
            e1e111111111e1e111111111e1e
            e1e111111e1111111e111111e1e
            e1e11111eee11111eee11111e1e
            e1e1111eeeee111eeeee1111e1e
            e1e11111e1e11111e1e11111e1e
            e1e111111111111111111111e1e
            e1e111111111111111111e11e1e
            e1e11111111111111111e1e1e1e
            e1e111111111111111111e11e1e
            e1e11111111111111111e1e1e1e
            e1e111111111111111111e11e1e
            e11e1111111111111111111e11e
            e11ee11111111111111111ee11e
            .e111eeeeeeeeeeeeeeeee111e.
            ..e111111111111111111111e..
            ...eeeeeeeeeeeeeeeeeeeee...
            `, SpriteKind.Player)
    } else if (card_number == 9) {
        player_card = sprites.create(img`
            ...eeeeeeeeeeeeeeeeeeeee...
            ..e111111111111111111111e..
            .e111eeeeeeeeeeeeeeeee111e.
            e11ee11111111111111111ee11e
            e11e1eee111111111111111e11e
            e1e11e1e1111111111111111e1e
            e1e11eee1111111111111111e1e
            e1e1111e1111111111111111e1e
            e1e11ee11111111111111111e1e
            e1e11111e1e11111e1e11111e1e
            e1e1111eeeee111eeeee1111e1e
            e1e11111eee11111eee11111e1e
            e1e111111e1111111e111111e1e
            e1e111111111111111111111e1e
            e1e111111111111111111111e1e
            e1e11111e1e11111e1e11111e1e
            e1e1111eeeee111eeeee1111e1e
            e1e11111eee11111eee11111e1e
            e1e111111e11e1e11e111111e1e
            e1e11111111eeeee11111111e1e
            e1e111111111eee111111111e1e
            e1e111111e111e111e111111e1e
            e1e11111eee11111eee11111e1e
            e1e1111eeeee111eeeee1111e1e
            e1e11111e1e11111e1e11111e1e
            e1e111111111111111111111e1e
            e1e111111111111111111111e1e
            e1e111111e1111111e111111e1e
            e1e11111eee11111eee11111e1e
            e1e1111eeeee111eeeee1111e1e
            e1e11111e1e11111e1e11111e1e
            e1e11111111111111111ee11e1e
            e1e1111111111111111e1111e1e
            e1e1111111111111111eee11e1e
            e1e1111111111111111e1e11e1e
            e11e111111111111111eee1e11e
            e11ee11111111111111111ee11e
            .e111eeeeeeeeeeeeeeeee111e.
            ..e111111111111111111111e..
            ...eeeeeeeeeeeeeeeeeeeee...
            `, SpriteKind.Player)
    } else if (card_number == 10) {
        _10_j_q_k = randint(0, 3)
        if (_10_j_q_k == 0) {
            player_card = sprites.create(img`
                ...eeeeeeeeeeeeeeeeeeeee...
                ..e111111111111111111111e..
                .e111eeeeeeeeeeeeeeeee111e.
                e11ee11111111111111111ee11e
                e11e1111111111111111111e11e
                e1e11e1eee11111111111111e1e
                e1e11e1e1e11111111111111e1e
                e1e11e1eee11111111111111e1e
                e1e111111111111111111111e1e
                e1e11111e1e11111e1e11111e1e
                e1e1111eeeee111eeeee1111e1e
                e1e11111eee11111eee11111e1e
                e1e111111e11e1e11e111111e1e
                e1e11111111eeeee11111111e1e
                e1e111111111eee111111111e1e
                e1e11111e1e11e11e1e11111e1e
                e1e1111eeeee111eeeee1111e1e
                e1e11111eee11111eee11111e1e
                e1e111111e1111111e111111e1e
                e1e111111111111111111111e1e
                e1e111111111111111111111e1e
                e1e111111e1111111e111111e1e
                e1e11111eee11111eee11111e1e
                e1e1111eeeee111eeeee1111e1e
                e1e11111e1e11e11e1e11111e1e
                e1e111111111eee111111111e1e
                e1e11111111eeeee11111111e1e
                e1e111111e11e1e11e111111e1e
                e1e11111eee11111eee11111e1e
                e1e1111eeeee111eeeee1111e1e
                e1e11111e1e11111e1e11111e1e
                e1e111111111111111111111e1e
                e1e11111111111111eee1e11e1e
                e1e11111111111111e1e1e11e1e
                e1e11111111111111eee1e11e1e
                e11e1111111111111111111e11e
                e11ee11111111111111111ee11e
                .e111eeeeeeeeeeeeeeeee111e.
                ..e111111111111111111111e..
                ...eeeeeeeeeeeeeeeeeeeee...
                `, SpriteKind.Player)
        } else if (_10_j_q_k == 1) {
            player_card = sprites.create(img`
                ...eeeeeeeeeeeeeeeeeeeee...
                ..e111111111111111111111e..
                .e111eeeeeeeeeeeeeeeee111e.
                e11ee11111111111111111ee11e
                e11e1111111111111111111e11e
                e1e11ee11111111111e1e111e1e
                e1e111e1111111111eeeee11e1e
                e1e1e1e11111111111eee111e1e
                e1e11e1111111111111e1111e1e
                e1e111111111111111111111e1e
                e1e111eeee11111111111111e1e
                e1e111e311e1111111111111e1e
                e1e111ed33e1111111111111e1e
                e1e111ed331e111111111111e1e
                e1e111edd33e111111111111e1e
                e1e1111edd31e11111111111e1e
                e1e1111edd33e11111111111e1e
                e1e11111edd31e1111111111e1e
                e1e11111eddd3e1111111111e1e
                e1e111111edd33e111111111e1e
                e1e111111eddd3e111111111e1e
                e1e1111111edd33e11ee1111e1e
                e1e1111111eddd33ee35e111e1e
                e1e11111111edd33e35e1111e1e
                e1e11111111eddde35e11111e1e
                e1e111111111ede95e111111e1e
                e1e1111111111e54bbe11111e1e
                e1e111111111e54cbbe11111e1e
                e1e11111111e44eccbbe1111e1e
                e1e111111111ee1eccbe1111e1e
                e1e111111111111eccce1111e1e
                e1e1111e11111111eee11e11e1e
                e1e111eee11111111111e1e1e1e
                e1e11eeeee1111111111e111e1e
                e1e111e1e11111111111ee11e1e
                e11e1111111111111111111e11e
                e11ee11111111111111111ee11e
                .e111eeeeeeeeeeeeeeeee111e.
                ..e111111111111111111111e..
                ...eeeeeeeeeeeeeeeeeeeee...
                `, SpriteKind.Player)
        } else if (_10_j_q_k == 2) {
            player_card = sprites.create(img`
                ...eeeeeeeeeeeeeeeeeeeee...
                ..e111111111111111111111e..
                .e111eeeeeeeeeeeeeeeee111e.
                e11ee11111111111111111ee11e
                e11e1111111111111111111e11e
                e1e11ee11111111111e1e111e1e
                e1e1e11e111111111eeeee11e1e
                e1e1e11e1111111111eee111e1e
                e1e11ee111111111111e1111e1e
                e1e1111e1111111111111111e1e
                e1e111111111111111111111e1e
                e1e111111111111111111111e1e
                e1e111111111111111111111e1e
                e1e1111111111e1111111111e1e
                e1e1111111111e1111111111e1e
                e1e111111111e9e111111111e1e
                e1e111111111e3e111111111e1e
                e1e11ee1111e355e1111ee11e1e
                e1e11e9e111e345e111e9e11e1e
                e1e111e5e1e35555e1e5e111e1e
                e1e111e5e1e55555e1e5e111e1e
                e1e111e45e3554555e54e111e1e
                e1e1111e555543e5554e1111e1e
                e1e1111e4555e945554e1111e1e
                e1e11111e4555e5554e11111e1e
                e1e11111e433353554e11111e1e
                e1e11111eeeeeeeeeee11111e1e
                e1e111111111111111111111e1e
                e1e111111111111111111111e1e
                e1e111111111111111111111e1e
                e1e1111111111111111e1111e1e
                e1e1111e111111111111ee11e1e
                e1e111eee1111111111e11e1e1e
                e1e11eeeee111111111e11e1e1e
                e1e111e1e11111111111ee11e1e
                e11e1111111111111111111e11e
                e11ee11111111111111111ee11e
                .e111eeeeeeeeeeeeeeeee111e.
                ..e111111111111111111111e..
                ...eeeeeeeeeeeeeeeeeeeee...
                `, SpriteKind.Player)
        } else if (_10_j_q_k == 3) {
            player_card = sprites.create(img`
                ...eeeeeeeeeeeeeeeeeeeee...
                ..e111111111111111111111e..
                .e111eeeeeeeeeeeeeeeee111e.
                e11ee11111111111111111ee11e
                e11e1111111111111111111e11e
                e1e11e1e1111111111e1e111e1e
                e1e11ee1111111111eeeee11e1e
                e1e11e1e1111111111eee111e1e
                e1e11e1e11111111111e1111e1e
                e1e111111111111111111111e1e
                e1e111111111111111111111e1e
                e1e111111111111111111111e1e
                e1e1111111111e1111111111e1e
                e1e111111111e9e111111111e1e
                e1e1111111111e1111111111e1e
                e1e111111111e3e111111111e1e
                e1e111e1111e355e1111e111e1e
                e1e11e3e111e355e111e3e11e1e
                e1e11e35e1e35554e1e35e11e1e
                e1e11e555e5553544e355e11e1e
                e1e11e495e5549e54e594e11e1e
                e1e11e4454e5e945e4444e11e1e
                e1e111e455455e554444e111e1e
                e1e111e4455555555544e111e1e
                e1e1111eeeeeeeeeeeee1111e1e
                e1e1111e44444555555e1111e1e
                e1e1111eeeeeeeeeeeee1111e1e
                e1e111111111111111111111e1e
                e1e111111111111111111111e1e
                e1e111111111111111111111e1e
                e1e111111111111111111111e1e
                e1e1111e11111111111e1e11e1e
                e1e111eee1111111111e1e11e1e
                e1e11eeeee1111111111ee11e1e
                e1e111e1e1111111111e1e11e1e
                e11e1111111111111111111e11e
                e11ee11111111111111111ee11e
                .e111eeeeeeeeeeeeeeeee111e.
                ..e111111111111111111111e..
                ...eeeeeeeeeeeeeeeeeeeee...
                `, SpriteKind.Player)
        }
    }
    player_card.setPosition(180, 92)
    player_card.setVelocity(-2000 + 20 * num2, 0)
    pause(200)
    player_card.setVelocity(0, 0)
    player_card.setPosition(80 + 20 * num2, 92)
}
function dealer_draw_cards () {
    while (true) {
        if (dealer_sum < player_sum || dealer_sum == player_sum && dealer_sum < 14) {
            create_dealer_card(false, 2 + dealer_draws)
        }
        dealer_sum += card_number
        dealer_draws += 1
        pause(100)
        while (dealer_ace > 0 && dealer_sum > 21) {
            dealer_sum += 0 - 10
            dealer_ace += -1
        }
        if (dealer_sum > 21) {
            game.splash("DEALER BUST!")
            game.gameOver(true)
        } else if (dealer_sum == 21) {
            break;
        }
        pause(100)
    }
}
function start_game () {
    if (can_start_game) {
        dealer_ace = 0
        player_ace = 0
        can_start_game = false
        create_card(0)
        player_sum = card_number
        create_card(1)
        player_sum += card_number
        create_dealer_card(true, 0)
        dealer_sum = card_number
        create_dealer_card(false, 1)
        dealer_sum += card_number
        if (player_sum == 21) {
            game.splash("BLACKJACK!")
        } else {
            draws = 0
            draw_cards()
        }
        animation.runImageAnimation(
        hidden_dealer_card,
        [img`
            ...eeeeeeeeeeeeeeeeeeeee...
            ..e1e1e1e1e1e1e1e1e1e1e1e..
            .e1e1eeeeeeeeeeeeeeeee1e1e.
            e1eeecb1111111111111bceee1e
            ee1e1ecb1ebd111dbe1bce1e1ee
            e1e111ecb1ebd1dbe1bce111e1e
            eee1e11ecb1ebdbe1bce11e1eee
            e1e1ce11ecb1ebe1bce11ec1e1e
            eee1bce11ecb1e1bce11ecb1eee
            e1e1dbce11ecb1bce11ecbd1e1e
            eee11111111ecbce11111111eee
            e1e111eee111ece111eee111e1e
            eee11eddde11ded11eddde11eee
            e1e11ed1de11ded11ed1de11e1e
            eee111e1de11ded11ed1e111eee
            e1e11bddde1deeed1edddb11e1e
            eee1beeee11deced11eeeeb1eee
            e1e1ee111ddeebeedd111ee1e1e
            eee1e11ddeeeedeeeedd11e1eee
            e1e1e1deeecbdddbceeed1e1e1e
            e1e1e1deeecbdddbceeed1e1e1e
            eee1e11ddeeeedeeeedd11e1eee
            e1e1ee111ddeebeedd111ee1e1e
            eee1beeee11deced11eeeeb1eee
            e1e11bddde1deeed1edddb11e1e
            eee111e1de11ded11ed1e111eee
            e1e11ed1de11ded11ed1de11e1e
            eee11eddde11ded11eddde11eee
            e1e111eee111ece111eee111e1e
            eee11111111ecbce11111111eee
            e1e1dbce11ecb1bce11ecbd1e1e
            eee1bce11ecb1e1bce11ecb1eee
            e1e1ce11ecb1ebe1bce11ec1e1e
            eee1e11ecb1ebdbe1bce11e1eee
            e1e111ecb1ebd1dbe1bce111e1e
            ee1e1ecb1ebd111dbe1bce1e1ee
            e1eeecb1111111111111bceee1e
            .e1e1eeeeeeeeeeeeeeeee1e1e.
            ..e1e1e1e1e1e1e1e1e1e1e1e..
            ...eeeeeeeeeeeeeeeeeeeee...
            `,img`
            ...........................
            ...........................
            ...........................
            ...........................
            ...........................
            ...........................
            ...........................
            ...........................
            ...........................
            ...........................
            ...........................
            ...........................
            ...........................
            ...........................
            ...........................
            ...........................
            ...........................
            ...........................
            ...........................
            ...........................
            ...........................
            ...........................
            ...........................
            ...........................
            ...........................
            ...........................
            ...........................
            ...........................
            ...........................
            ...........................
            ...........................
            ...........................
            ...........................
            ...........................
            ...........................
            ...........................
            ...........................
            ...........................
            ...........................
            ...........................
            `],
        500,
        false
        )
        if (dealer_sum == 21) {
            game.splash("DEALER BLACKJACK!")
            game.gameOver(false)
        } else if (dealer_sum > player_sum) {
        	
        } else {
            dealer_draws = 0
            dealer_draw_cards()
        }
        if (dealer_sum == player_sum) {
            game.splash("Tie...")
            game.reset()
        } else if (dealer_sum > player_sum) {
            game.splash("Dealer wins!")
            game.gameOver(false)
        } else if (dealer_sum < player_sum) {
            game.splash("You win!")
            game.gameOver(true)
        }
    }
}
let dealer_draws = 0
let dealer_sum = 0
let player_card: Sprite = null
let player_ace = 0
let player_sum = 0
let draws = 0
let hidden_dealer_card: Sprite = null
let _10_j_q_k = 0
let dealer_ace = 0
let dealer_card: Sprite = null
let card_number = 0
let can_start_game = false
let card_number_list: number[] = []
scene.setBackgroundImage(img`
    7776666667777777666666777777766666677777776644444444444444444777777766666677777776666667777777666666444444444444444447776666667777777666666777777766666677777776
    7767777776777776777777677777677777767777767744444444444444444677777677777767777767777776777776777777444444444444444447767777776777776777777677777677777767777767
    7677666677677767766667767776776666776777677644444444444444444767776776666776777677666677677767766667444444444444444447677666677677767766667767776776666776777677
    6776777767767677677776776767767777677676776754444444444444444776767767777677676776777767767677677776444444444444444446776777767767677677776776767767777677676776
    6767766776767676776677676767677667767676767754444444444444444676767677667767676767766776767676776677444444444444444456767766776767676776677676767677667767676767
    6767677676767676767767676767676776767676767655444444444444444676767676776767676767677676767676767767444444444444444456767677676767676767767676767676776767676767
    6767676776767676767677676767676767767676767655444444444444444676767676767767676767676776767676767677444444444444444556767676776767676767677676767676767767676767
    6767677767767676767776776767676777677676767655544444444444444476767676333333333333333333333676767776444444444444444556767677767767676767776776767676777677676767
    6667766677666666776667766666677766776666667755554444444444444466666673888888888888888888888366776664444444444444445556667766677666666777667766666677666776666667
    7776777776777777677777677777767777767777776775554444444444444447777738888888888888888888888837677774444444444444455557776777776777777677777677777767777767777776
    6677666667766667766666776666776766677666677665555444444444444446666388888888888888888888888883766644444444444444455566677666667766667767666776666776666677666677
    7767767677677776776767767777677676776777767765555544444444444444777388888888888888888888888883776744444444444444555577767767677677776776767767777677676776777767
    6776766676776677676667677667767666767766776765555554444444444444667388888888888888888888888883676444444444444445555566776766676776677676667677667767666767766776
    7676767676767767676767676776767676767677676767555555444444444444476388888888888888888888888883676444444444444455555577676767676767767676767676776767676767677676
    6776767676767677676767676767767676767676776767555555444444444444447388888888888888888888888883674444444444444555555676776767676767677676767676767767676767676776
    7767767676767776776767676777677676767677767767655555554444444444444388888888888888888888888883744444444444444555555677767767676767776776767676777677676767677767
    6677677676776667767767677666776776767766677677655555555444444444444388888888888888888888888883444444444444455555557766677677676776667767767677666776776767766677
    7776777677677777677767767777767776776777776777675555555544444444444388888888888888888888888883444444444444555555556777776777677677777677767767777767776776777776
    6666666667766666666666776666666666677666666666663555555554444444444388888888888888888888888883444444444445555555577666666666667766666666666776666666666677666666
    7767777776777776777777677777677777767777767777776355555555554444444388888888888888888888888883444444444455555555367777767777776777776777777677777677777767777767
    6677666677666667766667766666776666776666677666677335555555555554444388888888888888888888888883444444455555555553776666677666677666667766667766666776666776666677
    6776777767767677677776776767767777677676776777767733555555555555554388888888888888888888888883444455555555555533677676776777767767677677776776767767777677676776
    6767766776767676776677676767677667767676767766776763355555555555555388888888888888888888888883455555555555555337767676767766776767676776677676767677667767676767
    6767677676767676767767676767676776767676767677676767335555555555555388888888888888888888888883555555555555553376767676767677676767676767767676767676776767676767
    6767676776767676767677676767676767767676767676776767333555555555555388888888888888888888888883555555555555533767767676767676776767676767677676767676767767676767
    6767677767767676767776776767676777677676767677767767633355555555555388888888888888888888888883555555555555333777677676767677767767676767776776767676777677676767
    6667766677666666776667766666677766776666667766677666663333555555555388888888888888888888888883555555555553337766776666667766677666666777667766666677666776666667
    7776777776777777677777677777767777767777776777776777777333555555555388888888888888888888888883555555555333367777767777776777776777777677777677777767777767777776
    6677666667766667766666776666776766677666677666667766667733333555555388888888888888888888888883555555555333776766677666677666667766667767666776666776666677666677
    7767767677677776776767767777677676776777767767677677776773333335555388888888888888888888888883555555333337677676776777767767677677776776767767777677676776777767
    6776766676776677676667677667767666767766776766676776677676613333333388888888888888888888888883555533333367767666767766776766676776677676667677667767666767766776
    7676767676767767676767676776767676767677676767676767767676761133333388888888888888888888888883333333316776767676767677676767676767767676767676776767676767677676
    6776767676767677676767676767767676767676776767676767677676767611333388888888888888888888888883333331176767767676767676776767676767677676767676767767676767676776
    7767767676767776776767676777677676767677767767676767776776767676111388888888888888888888888883333117676777677676767677767767676767776776767676777677676767677767
    6677677676776667767767677666776776767766677677676776667767767677661388888888888888888888888883111767677666776776767766677677676776667767767677666776776767766677
    7776777677677777677767767777767776776777776777677677777677767767777388888888888888888888888883177767767777767776776777776777677677777677767767777767776776777776
    6666666667766666666666776666666666677666666666667766666666666776666388888888888888888888888883666666776666666666677666666666667766666666666776666666666677666666
    7767777776777776777777677777677777767777767777776777776777777677777388888888888888888888888883777777677777677777767777767777776777776777777677777677777767777767
    6677666677666667766667766666776666776666677666677666667766667766666388888888888888888888888883766667766666776666776666677666677666667766667766666776666776666677
    6776777767767677677776776767767777677676776777767767677677776776767388888888888888888888888883677776776767767777677676776777767767677677776776767767777677676776
    6767766776767676776677676767677667767676767766776767676776677676767388888888888888888888888883776677676767677667767676767766776767676776677676767677667767676767
    6767677676767676767767676767676776767676767677676767676767767676767388888888888888888888888883767767676767676776767676767677676767676767767676767676776767676767
    6767676776767676767677676767676767767676767676776767676767677676767388888888888888888888888883767677676767676767767676767676776767676767677676767676767767676767
    6767677767767676767776776767676777677676767677767767676767776776767388888888888888888888888883767776776767676777677676767677767767676767776776767676777677676767
    6767766677677676776667767767677666776776767766677677676776667767767638888888888888888888888836776667767767677666776776767766677677676776667767767677666776776767
    6776777776777677677777677767767777767776776777776777677677777677767763888888888888888888888377677777677767767777767776776777776777677677777677767767777767776776
    6677666776666667766677666666777667766666677666776666667776677666666776333333333333333333333667766677666666777667766666677666776666667776677666666776667766666677
    7767777767777776777776777777677777677777767777767777776777776777777677777677777767777767777776777776777777677777677777767777767777776777776777777677777677777767
    6776666677666677666667766667767666776666776666677666677676667766667766666776666776766677666677666667766667767666776666776666677666677676667766667766666776666776
    7677676776777767767677677776776767767777677676776777767767677677776776767767777677676776777767767677677776776767767777677676776777767767677677776776767767777677
    7767666767766776766676776677676667677667767666767766776766676776677676667677667767666767766776766676776677676667677667767666767766776766676776677676667677667767
    6767676767677676767676767767676767676776767676767677676767676767767676767676776767676767677676767676767767676767676776767676767677676767676767767676767676776767
    7767676767676776767676767677676767676767767676767676776767676767677676767676767767676767676776767676767677676767676767767676767676776767676767677676767676767767
    7677676767677767767676767776776767676777677676767677767767676767776776767676777677676767677767767676767776776767676777677676767677767767676767776776767676777677
    6776776767766677677676776667767767677666776776767766677677676776667767767677666776776767766677677676776667767767677666776776767766677677676776667767767677666777
    7767776776777776777677677777677767767777767776776777776777677677777677767767777767776776777776777677677777677767767777767776776777776777677677777677767767777767
    6666666677666666666667766666666666776666666666677666666666667766666666666776666666666677666666666667766666666666776666666666677666666666667766666666666776666667
    7677777767777767777776777776777777677777677777767777767777776777776777777677777677777767777767777776777776777777677777677777767777767777776777776777777677777677
    6776666776666677666677666667766667766666776666776666677666677666667766667766666776666776666677666677666667766667766666776666776666677666677666667766667766666777
    7767777677676776777767767677677776776767767777677676776777767767677677776776767767777677676776777767767677677776776767767777677676776777767767677677776776767767
    7677667767676767766776767676776677676767677667767676767766776767676776677676767677667767676767766776767676776677676767677667767676767766776767676776677676767677
    7676776767676767677676767676767767676767676776767676767677676767676767767676767676776767676767677676767676767767676767676776767676767677676767676767767676767677
    7676767767676767676776767676767677676767676767767676767676776767676767677676767676767767676767676776767676767677676767676767767676767676776767676767677676767677
    7676777677676767677767767676767776776767676777677676767677767767676767776776767676777677676767677767767676767776776767676777677676767677767767676767776776767677
    7677666776776767766677677676776667767767677666776776767766677677676776667767767677666776776767766677677676776667767767677666776776767766677677676776667767767677
    7767777767776776777776777677677777677767767777767776776777776777677677777677767767777767776776777776777677677777677767767777767776776777776777677677777677767767
    6776667766666677666776666667776677666666776667766666677766776666667766677666666777667766666677666776666667776677666666776667766666677766776666667766677666666777
    7677777677777767777767777776777776777777677777677777767777767777776777776777777677777677777767777767777776777776777777677777677777767777767777776777776777777677
    7766666776666776666677666677676667766667766666776666776766677666677666667766667767666776666776666677666677676667766667766666776666776766677666677666667766667767
    6776767767777677676776777767767677677776776767767777677676776777767767677677776776767767777677676776777767767677677776776767767777677676776777767767677677776777
    7676667677667767666767766776766676776677676667677667767666767766776766676776677676667677667767666767766776766676776677676667677667767666767766776766676776677677
    7676767676776767676767677676767676767767676767676776767676767677676767676767767676767676776767676767677676767676767767676767676776767676767677676767676767767677
    7676767676767767676767676776767676767677676767676767767676767676776767676767677676767676767767676767676776767676767677676767676767767676767676776767676767677677
    6776767676777677676767677767767676767776776767676777677676767677767767333333333333333333333677676767677767767676767776776767676777677676767677767767676767776777
    7767767677666776776767766677677676776667767767677666776776767766677673888888888888888888888376776767766677677676776667767767677666776776767766677677676776667777
    7677767767777767776776777776777677677777677767767777767776776777776738888888888888888888888837776776777776777677677777677767767777767776776777776777677677777677
    6666666776666666666677666666666667766666666666776666666666677666666388888888888888888888888883666677666666666667766666666666776666666666677666666666667766666677
    6777777677777677777767777767777776777776777777677777677777767777767388888888888888888888888883777767777767777776777776777777677777677777767777767777776777776777
    7766667766666776666776666677666677666667766667766666776666776666677388888888888888888888888883666776666677666677666667766667766666776666776666677666677666667777
    7677776776767767777677676776777767767677677776776767767777677676776388888888888888888888888883777677676776777767767677677776776767767777677676776777767767677677
    6776677676767677667767676767766776767676776677676767677667767676767388888888888888888888888883667767676767766776767676776677676767677667767676767766776767676777
    6767767676767676776767676767677676767676767767676767676776767676767388888888888888888888888883776767676767677676767676767767676767676776767676767677676767676777
    6767677676767676767767676767676776767676767677676767676767767676767388888888888888888888888883767767676767676776767676767677676767676767767676767676776767676777
    6767776776767676777677676767677767767676767776776767676777677676767388888888888888888888888883777677676767677767767676767776776767676777677676767677767767676777
    6776667767767677666776776767766677677676776667767767677666776776767388888888888888888888888883666776776767766677677676776667767767677666776776767766677677676777
    6667766677666666776667766666677766776666667766677666666777667766666388888888888888888888888883776667766666677766776666667766677666666777667766666677666776666667
    7776777776777777677777677777767777767777776777776777777677777677777388888888888888888888888883677777677777767777767777776777776777777677777677777767777767777776
    6677666667766667766666776666776766677666677666667766667767666776666388888888888888888888888883766666776666776766677666677666667766667767666776666776666677666677
    7767767677677776776767767777677676776777767767677677776776767767777388888888888888888888888883776767767777677676776777767767677677776776767767777677676776777767
    6776766676776677676667677667767666767766776766676776677676667677667388888888888888888888888883676667677667767666767766776766676776677676667677667767666767766776
    7676767676767767676767676776767676767677676767676767767676767676776388888888888888888888888883676767676776767676767677676767676767767676767676776767676767677676
    6776767676767677676767676767767676767676776767676767677676767676767388888888888888888888888883676767676767767676767676776767676767677676767676767767676767676776
    7767767676767776776767676777677676767677767767676767776776767676777388888888888888888888888883776767676777677676767677767767676767776776767676777677676767677767
    6677677676776667767767677666776776767766677677676776667767767677666388888888888888888888888883767767677666776776767766677677676776667767767677666776776767766677
    7776777677677777677767767777767776776777776777677677777677767767777388888888888888888888888883677767767777767776776777776777677677777677767767777767776776777776
    6666666667766666666666776666666666677666666666667766666666666776666388888888888888888888888883666666776666666666677666666666667766666666666776666666666677666666
    7767777776777776777777677777677777767777767777776777776777777677777388888888888888888888888883777777677777677777767777767777776777776777777677777677777767777767
    6677666677666667766667766666776666776666677666677666667766667766666388888888888888888888888883766667766666776666776666677666677666667766667766666776666776666677
    6776777767767677677776776767767777677676776777767767677677776776767388888888888888888888888883677776776767767777677676776777767767677677776776767767777677676776
    6767766776767676776677676767677667767676767766776767676776677676767388888888888888888888888883776677676767677667767676767766776767676776677676767677667767676767
    6767677676767676767767676767676776767676767677676767676767767676767388888888888888888888888883767767676767676776767676767677676767676767767676767676776767676767
    6767676776767676767677676767676767767676767676776767676767677676767388888888888888888888888883767677676767676767767676767676776767676767677676767676767767676767
    6767677767767676767776776767676777677676767677767767676767776776767388888888888888888888888883767776776767676777677676767677767767676767776776767676777677676767
    6767766677677676776667767767677666776776767766677677676776667767767388888888888888888888888883776667767767677666776776767766677677676776667767767677666776776767
    6776777776777677677777677767767777767776776777776777677677777677767388888888888888888888888883677777677767767777767776776777776777677677777677767767777767776776
    6677666776666667766677666666777667766666677666776667767766666776776388888888888888888888888883766666776776776666677677677666667767767766666776776776666677677677
    6667766677666666776667766666677766776666667766677666666777667766666388888888888888888888888883776667766666677766776666667766677666666777667766666677666776666667
    7776777776777777677777677777767777767777776777776777777677777677777388888888888888888888888883677777677777767777767777776777776777777677777677777767777767777776
    6677666667766667766666776666776766677666677666667766667767666776666388888888888888888888888883766666776666776766677666677666667766667767666776666776666677666677
    7767767677677776776767767777677676776777767767677677776776767767777388888888888888888888888883776767767777677676776777767767677677776776767767777677676776777767
    6776766676776677676667677667767666767766776766676776677676667677667738888888888888888888888837676667677667767666767766776766676776677676667677667767666767766776
    7676767676767767676767676776767676767677676767676767767676767676776763888888888888888888888367676767676776767676767677676767676767767676767676776767676767677676
    6776767676767677676767676767767676767676776767676767677676767676767767333333333333333333333677676767676767767676767676776767676767677676767676767767676767676776
    7767767676767776776767676777677676767677767767676767776776767676777677676767677767767676767776776767676777677676767677767767676767776776767676777677676767677767
    6677677676776667767767677666776776767766677677676776667767767677666776776767766677677676776667767767677666776776767766677677676776667767767677666776776767766677
    7776777677677777677767767777767776776777776777677677777677767767777767776776777776777677677777677767767777767776776777776777677677777677767767777767776776777776
    6666666667766666666666776666666666677666666666667766666666666776666666666677666666666667766666666666776666666666677666666666667766666666666776666666666677666666
    7767777776777776777777677777677777767777767777776777776777777677777677777767777767777776777776777777677777677777767777767777776777776777777677777677777767777767
    6677666677666667766667766666776666776666677666677666667766667766666776666776666677666677666667766667766666776666776666677666677666667766667766666776666776666677
    6776777767767677677776776767767777677676776777767767677677776776767767777677676776777767767677677776776767767777677676776777767767677677776776767767777677676776
    `)
card_number_list = [
11,
2,
3,
4,
5,
6,
7,
8,
9,
10,
10,
10,
10
]
game.splash("Press A to play")
can_start_game = true
