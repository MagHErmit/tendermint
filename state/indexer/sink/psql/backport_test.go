package psql

import (
	"github.com/MagHErmit/tendermint/state/indexer"
	"github.com/MagHErmit/tendermint/state/txindex"
)

var (
	_ indexer.BlockIndexer = BackportBlockIndexer{}
	_ txindex.TxIndexer    = BackportTxIndexer{}
)
