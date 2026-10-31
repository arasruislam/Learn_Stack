// Min Max in optimized Way

#include <stdio.h>

void findMinMax(int values[], int n)
{
  if (n <= 0)
    return;

  int max = values[0];
  int min = values[0];

  for (int i = 0; i < n; i++)
  {
    if (values[i] > max)
    {
      max = values[i];
    }

    if (values[i] < min)
    {
      min = values[i];
    }
  }

  printf("Maximum value: %d\nMinimum value: %d", max, min);
}

int main()
{
  int values[] = {1, 7, 9, -3, 4, -45, 6, -90, -34, 50};
  int n = sizeof(values) / sizeof(values[0]);

  findMinMax(values, n);
  return 0;
}
