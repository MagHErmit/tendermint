package v0_test

import (
	"io/ioutil"
	"os"
	"path/filepath"
	"testing"

	mempoolv0 "github.com/MagHErmit/tendermint/test/fuzz/mempool/v0"
	"github.com/stretchr/testify/require"
)

const testdataCasesDir = "testdata/cases"

func TestMempoolTestdataCases(t *testing.T) {
	entries, err := os.ReadDir(testdataCasesDir)
	require.NoError(t, err)

	for _, e := range entries {
		entry := e
		t.Run(entry.Name(), func(t *testing.T) {
			defer func() {
				r := recover()
				require.Nilf(t, r, "testdata/cases test panic")
			}()
			f, err := os.Open(filepath.Join(testdataCasesDir, entry.Name()))
			require.NoError(t, err)
			input, err := ioutil.ReadAll(f)
			require.NoError(t, err)
			mempoolv0.Fuzz(input)
		})
	}
}
