// Move all zero to the end of an array

#include <stdio.h>

void moveZerosToEnd(int arr[], int n)
{
  int non_zero_pos = 0;

  for (int i = 0; i < n; i++)
  {
    if (arr[i] != 0)
    {
      int temp = arr[i];

      arr[i] = arr[non_zero_pos];
      arr[non_zero_pos] = temp;

      non_zero_pos++;
    }
  }
}

void printArray(int arr[], int n)
{
  for (int i = 0; i < n; i++)
  {
    printf("%d ", arr[i]);
  }
  printf("\n");
}

int main()
{
  int arr[] = {1, 3, 0, 5, 0, 3, 4, 0, 2, 7, 9};
  int n = sizeof(arr) / sizeof(arr[0]);

  moveZerosToEnd(arr, n);
  printArray(arr, n);
  return 0;
}
