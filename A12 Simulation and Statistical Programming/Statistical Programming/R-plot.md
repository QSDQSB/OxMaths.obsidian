
## Multiple Plots
https://stackoverflow.com/questions/13239986/avoid-wasting-space-when-placing-multiple-aligned-plots-onto-one-page
```r
par(mfrow = c(2, 2),     # 2x2 layout
    oma = c(2, 2, 0, 0), # two rows of text at the outer left and bottom margin
    mar = c(1, 1, 0, 0), # space for one row of text at ticks and to separate plots
    mgp = c(2, 1, 0),    # axis label at 2 rows distance, tick labels at 1 row
    xpd = NA)            # allow content to protrude into outer margin (and beyond)
```