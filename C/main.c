// Reverse an Array In-Place (Two Pointers)

#include <stdio.h>

void reverseArray(int arr[], int n)
{
  int left = 0;
  int right = n - 1;

  while (left < right)
  {
    int temp = arr[right];
    arr[left] = arr[right];
    arr[right] = temp;

    left++;
    right--;
  }
}

void printVal(int arr[], int n)
{
  for (int i = 0; i < n; i++)
  {
    printf("%d\n", arr[i]);
  }
}

int main()
{
  int arr[] = {10, 20, 30, 40, 50};
  int n = sizeof(arr) / sizeof(arr[0]);

  reverseArray(arr, n);
  printVal(arr, n);

  return 0;
}
